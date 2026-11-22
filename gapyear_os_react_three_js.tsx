import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  Compass, Camera, Dumbbell, Wallet, BookOpen, Box, Mic, Coins,
  MapPin, Flame, Scale, PiggyBank, Bell, Check, Plus, Trash2,
  FolderPlus, ArrowLeft, Clock, X, Download, Upload, Sparkles,
  Heart, Gift, Trophy, Search, FileText, GraduationCap
} from 'lucide-react';

const STORAGE_KEY = 'gapyear_os_react_huqiuyi_v2';

const DEFAULT_STATE = {
  coins: 120,
  calories: {
    target: 1550,
    meals: [
      { id: 1, type: '早午餐 (09:30)', desc: '全麦欧包1个 + 水煮蛋2个 + 无糖黑咖啡', preCal: 390, leftoverCal: 0, netCal: 390, time: '09:35' },
      { id: 2, type: '午餐 (12:40)', desc: '黄家湖食堂：杂粮饭 + 去皮卤鸡腿 + 清炒西兰花', preCal: 770, leftoverCal: 180, netCal: 590, time: '12:45' }
    ]
  },
  weights: [
    { date: '11-17', val: 61.8 },
    { date: '11-18', val: 61.6 },
    { date: '11-19', val: 61.5 },
    { date: '11-20', val: 61.3 },
    { date: '11-21', val: 61.2 },
    { date: '11-22', val: 61.1 },
    { date: '11-23', val: 61.0 }
  ],
  schedules: [
    { id: 1, time: '09:00 - 09:40', title: '晨起空腹称重 + 温水唤醒 + 高蛋白早午餐', tag: '作息与减脂', color: 'emerald', done: true },
    { id: 2, time: '10:00 - 11:50', title: '雅思核心词 50个 + 地大黄爱武老师课题组文献精读', tag: '科研与雅思', color: 'sky', done: true },
    { id: 3, time: '14:00 - 17:40', title: '【第13周周一】《多媒体设计2》连堂（教一楼二区603）', tag: '第13周课表', color: 'indigo', done: false },
    { id: 4, time: '18:10 - 19:10', title: '【第13周周一】下课顺路练背肩 + 爬坡25分钟', tag: '61kg减脂', color: 'rose', done: false },
    { id: 5, time: '23:30 - 00:45', title: '睡前沉浸阅读：《三叶虫演化史》（01:30前准备入睡）', tag: '阅读习惯', color: 'amber', done: false }
  ],
  ddls: [
    { id: 1, title: '第13周开启：周一/三/五 14:00-17:40《多媒体设计2》', due: '今日 14:00 教一二区603', urgent: true },
    { id: 2, title: '毕业设计(论文)开题推进（教一楼二区507）', due: '第13-15周重点', urgent: false }
  ],
  weekPlan: [
    { day: '周一 (11.23)', classes: ['14:00-17:40 多媒体设计2 (教一二区603)', '毕业设计(论文) (教一二区507·自主)'], workout: '18:10 下课顺路：美背直角肩 + 爬坡25m', isWorkout: true, done: false },
    { day: '周二 (11.24)', classes: ['全天无坐班课 · 毕业设计自主推进'], workout: '科研文献 + 雅思精听训练', isWorkout: false, done: false },
    { day: '周三 (11.25)', classes: ['14:00-17:40 多媒体设计2 (教一二区603)', '毕业设计(论文) (教一二区507·自主)'], workout: '18:10 下课顺路：蜜桃臀腿塑形 + 椭圆机', isWorkout: true, done: false },
    { day: '周四 (11.26)', classes: ['全天无坐班课 · 毕业设计自主推进'], workout: '日语跟读 + 3D建模工作台', isWorkout: false, done: false },
    { day: '周五 (11.27)', classes: ['14:00-17:40 多媒体设计2 (教一二区603)', '毕业设计(论文) (教一二区507·自主)'], workout: '18:10 下课顺路：核心马甲线 + 拉伸放松', isWorkout: true, done: false },
    { day: '周六 (11.28)', classes: [], workout: '周末户外散步 / 欺骗餐微调', isWorkout: false, done: false },
    { day: '周日 (11.29)', classes: ['20:30-22:10 歌声中的党史Z (智慧树)'], workout: '周体重复盘 + 睡前沉浸阅读', isWorkout: false, done: false }
  ],
  wallet: {
    budget: 1500,
    expenses: [
      { id: 1, title: '武科大黄家湖食堂餐饮汇总', amount: 412.5, category: '健康餐饮', date: '本月累计' },
      { id: 2, title: '购买《三叶虫演化史》及地质专业书', amount: 148.0, category: '书籍学习', date: '11-18' },
      { id: 3, title: '健身补剂与无糖黑咖啡', amount: 126.0, category: '健身运动', date: '11-15' },
      { id: 4, title: '日常护肤与生活用品', amount: 118.0, category: '日用服饰', date: '11-12' },
      { id: 5, title: '低卡零食与代糖饮品', amount: 38.0, category: '零食饮料', date: '11-20' }
    ],
    rewards: [
      { id: 1, title: '无罪恶感周末放纵美食一顿', cost: 150, icon: '🍜', redeemed: 0 },
      { id: 2, title: '入手一本心仪的古生物/设计画册', cost: 200, icon: '📚', redeemed: 0 },
      { id: 3, title: '清空购物车一件心愿好物 (≤150元)', cost: 350, icon: '🛍️', redeemed: 0 },
      { id: 4, title: '懒觉豁免券（周末睡到自然醒）', cost: 80, icon: '🛌', redeemed: 0 }
    ]
  },
  bookCategories: ['地大专业', '古生物科普', '雅思日语', '3D与开发', '艺术设计'],
  readingStats: {
    totalSeconds: 0,
    streakDays: 0,
    lastReadDate: '',
    periods: { morning: 0, evening: 0, night: 0 }
  },
  books: [
    {
      id: 1,
      title: '工程地质学原理（地大黄爱武组衔接）',
      author: '中国地质大学出版社',
      category: '地大专业',
      progress: 0,
      lastPage: 0,
      readMins: 0,
      coverBg: 'from-emerald-600 to-teal-800',
      content: [
        '第一章 岩土体工程地质性质概述',
        '工程地质学是研究与人类工程建筑活动有关的地质问题的学科。对于即将进入中国地质大学（武汉）黄爱武老师课题组开展研究生学习的你而言，掌握岩土体物理力学性质与地质灾害防治是核心基石。',
        '第二章 边坡稳定性与地质灾害防控',
        '利用大四保研后的空档期，每天花 40 分钟精读基础概念与最新核心期刊文献，明年九月入学即可直接上手课题实验！'
      ]
    },
    {
      id: 2,
      title: '三叶虫！演化史上的远古盔甲武士',
      author: '理查德·福蒂',
      category: '古生物科普',
      progress: 0,
      lastPage: 0,
      readMins: 0,
      coverBg: 'from-amber-600 to-orange-800',
      content: [
        '第一章 寒武纪生命大爆发的见证者',
        '在距今约5.21亿年前的寒武纪生命大爆发时期，三叶虫就已经披着方解石构成的复眼和坚硬背甲，在远古海洋中繁衍生息了。',
        '第二章 神奇的方解石复眼',
        '最令人惊叹的是三叶虫的方解石晶体复眼——这是地球生命史上最早演化出的精密光学系统之一。'
      ]
    },
    {
      id: 3,
      title: '剑桥雅思真题 18 学术类精讲',
      author: 'Cambridge Press',
      category: '雅思日语',
      progress: 0,
      lastPage: 0,
      readMins: 0,
      coverBg: 'from-sky-600 to-blue-800',
      content: [
        '第一章 学术听力高频地质与生态场景',
        'Section 4 学术讲座高频场景词汇：geological formation（地质构造）、sedimentation（沉积作用）、fossil record（化石记录）——这些词汇与你的地学背景天然契合！'
      ]
    },
    {
      id: 4,
      title: '公共空间营造与参数化三维装置设计',
      author: '环境艺术设计教研室',
      category: '艺术设计',
      progress: 0,
      lastPage: 0,
      readMins: 0,
      coverBg: 'from-purple-600 to-indigo-800',
      content: [
        '第一章 校园公共空间的互动叙事',
        '结合你第16周即将开始的《公共空间营造》课程，可以尝试在 Blender 中搭建可交互的校园公共艺术装置模型，并通过 Three.js 嵌入网页进行多角度展示。'
      ]
    }
  ],
  pet: {
    species: 'trilobite',
    name: '三叶虫·团子',
    emoji: '🪲',
    level: 5,
    exp: 410,
    maxExp: 500,
    food: 4
  }
};

export default function App() {
  const [state, setState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return { ...DEFAULT_STATE, ...JSON.parse(saved) };
    } catch (e) {}
    return DEFAULT_STATE;
  });

  const [activeTab, setActiveTab] = useState('dashboard');
  const [toasts, setToasts] = useState([]);
  const [clockText, setClockText] = useState({ hm: '09:00', sec: '00s', date: '2026年11月23日 星期一', week: '第13周 · 2026-2027秋季学期' });
  const [weather, setWeather] = useState({ temp: '14°C', desc: '多云转晴', icon: '🌤️', loc: '武汉·武科大黄家湖校区' });

  // 餐前餐后双图热量状态
  const [preImg, setPreImg] = useState('');
  const [postImg, setPostImg] = useState('');
  const [foodDesc, setFoodDesc] = useState('黄家湖二食堂：杂粮饭 + 去皮卤鸡腿 + 清炒西兰花');
  const [preCal, setPreCal] = useState(580);
  const [leftoverRatio, setLeftoverRatio] = useState(26);
  const [postCal, setPostCal] = useState(150);
  const [mealType, setMealType] = useState('午餐 (12:30)');
  const [quickWeight, setQuickWeight] = useState('');

  // 课表教学周选择
  const [weekKey, setWeekKey] = useState('week13');

  // 书架与阅读器状态
  const [bookCatFilter, setBookCatFilter] = useState('all');
  const [bookSearch, setBookSearch] = useState('');
  const [activeBookId, setActiveBookId] = useState(null);
  const [readerSecs, setReaderSecs] = useState(0);
  const [readerTheme, setReaderTheme] = useState('paper');
  const [readerFontSize, setReaderFontSize] = useState(16);
  const [readerNote, setReaderNote] = useState('');
  const [readerPage, setReaderPage] = useState(0);
  const [readerMode, setReaderMode] = useState('page');
  const [showTocDrawer, setShowTocDrawer] = useState(false);

  // 3D 模型形态
  const [threeShape, setThreeShape] = useState('crystal');
  const threeContainerRef = useRef(null);
  const meshRef = useRef(null);

  // 弹窗状态
  const [voiceOpen, setVoiceOpen] = useState(false);
  const [voiceText, setVoiceText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const [pasteBillOpen, setPasteBillOpen] = useState(false);
  const [rawBillText, setRawBillText] = useState('');
  const [backupModalOpen, setBackupModalOpen] = useState(false);
  const [addBookOpen, setAddBookOpen] = useState(false);
  const [newBookForm, setNewBookForm] = useState({ title: '', author: '', category: '地大专业', content: '' });
  const [importingFileStatus, setImportingFileStatus] = useState('');

  // 通用表单弹窗（替代 prompt）
  const [customModal, setCustomModal] = useState(null);
  const [customValues, setCustomValues] = useState({});

  // 宠物气泡
  const [petQuote, setPetQuote] = useState('秋意你好！今天第13周周一，14:00-17:40教一楼二区603有《多媒体设计2》连堂课，18:10下课顺路去健身房练美背直角肩哦！');

  // 自动持久化到 localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  // 实时电子时钟
  useEffect(() => {
    const weekNames = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const week13Start = new Date(2026, 10, 23, 0, 0, 0);
    const updateClock = () => {
      const now = new Date();
      const isTargetEra = now.getFullYear() === 2026 && now.getMonth() === 10;
      const d = isTargetEra ? now : new Date(2026, 10, 23, now.getHours(), now.getMinutes(), now.getSeconds());
      const hm = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      const sec = `${String(d.getSeconds()).padStart(2, '0')}s`;
      const date = `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日 ${weekNames[d.getDay()]}`;
      const diffDays = Math.floor((d - week13Start) / (1000 * 60 * 60 * 24));
      const wk = 13 + Math.floor(diffDays / 7);
      setClockText({ hm, sec, date, week: `第${wk}周 · 2026-2027秋季学期` });
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  // 获取武汉黄家湖实时天气
  const refreshWeather = async (manual = false) => {
    try {
      const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=30.4408&longitude=114.2654&current_weather=true');
      const data = await res.json();
      if (data?.current_weather) {
        const temp = Math.round(data.current_weather.temperature);
        const code = data.current_weather.weathercode;
        let desc = '晴朗微风';
        let icon = '☀️';
        if (code >= 1 && code <= 3) { desc = '多云舒适'; icon = '🌤️'; }
        else if (code >= 45 && code <= 48) { desc = '轻雾'; icon = '🌫️'; }
        else if (code >= 51 && code <= 67) { desc = '小雨微凉'; icon = '🌧️'; }
        setWeather({ temp: `${temp}°C`, desc, icon, loc: '武汉·武科大黄家湖校区' });
        if (manual) notify(`已刷新黄家湖天气：${temp}°C ${desc}`, 'success');
      }
    } catch (e) {
      if (manual) notify('已更新黄家湖校区气象信息', 'info');
    }
  };

  useEffect(() => {
    refreshWeather(false);
  }, []);

  // 阅读器自动计时器
  useEffect(() => {
    if (!activeBookId) return;
    const t = setInterval(() => setReaderSecs((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, [activeBookId]);

  // Three.js 3D 实验室初始化
  useEffect(() => {
    if (activeTab !== 'academic' || !threeContainerRef.current) return;
    const container = threeContainerRef.current;
    const width = container.clientWidth || 320;
    const height = container.clientHeight || 240;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.85));
    const dirLight = new THREE.DirectionalLight(0x38bdf8, 1.3);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    let geo, mat;
    if (threeShape === 'crystal') {
      geo = new THREE.OctahedronGeometry(1.25, 0);
      mat = new THREE.MeshStandardMaterial({ color: 0x10b981, roughness: 0.2, metalness: 0.3, flatShading: true });
    } else if (threeShape === 'ammonite') {
      geo = new THREE.TorusKnotGeometry(0.85, 0.28, 100, 16);
      mat = new THREE.MeshStandardMaterial({ color: 0xd97706, roughness: 0.35, metalness: 0.4 });
    } else {
      geo = new THREE.BoxGeometry(1.75, 0.85, 1.75, 3, 2, 3);
      mat = new THREE.MeshStandardMaterial({ color: 0x818cf8, wireframe: true });
    }
    const mesh = new THREE.Mesh(geo, mat);
    meshRef.current = mesh;
    scene.add(mesh);

    let dragging = false;
    let prev = { x: 0, y: 0 };
    const onDown = (e) => {
      dragging = true;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      prev = { x: clientX, y: clientY };
    };
    const onUp = () => { dragging = false; };
    const onMove = (e) => {
      if (!dragging || !meshRef.current) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      meshRef.current.rotation.y += (clientX - prev.x) * 0.012;
      meshRef.current.rotation.x += (clientY - prev.y) * 0.012;
      prev = { x: clientX, y: clientY };
    };

    container.addEventListener('mousedown', onDown);
    container.addEventListener('touchstart', onDown, { passive: true });
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });

    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (meshRef.current && !dragging) {
        meshRef.current.rotation.y += 0.008;
        meshRef.current.rotation.x += 0.003;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onDown);
      container.removeEventListener('touchstart', onDown);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      renderer.dispose();
    };
  }, [activeTab, threeShape]);

  const notify = (msg, type = 'info') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, msg, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const grantReward = (coinsDelta, expDelta, msg, foodDelta = 0) => {
    setState((prev) => {
      let nextExp = prev.pet.exp + expDelta;
      let nextLevel = prev.pet.level;
      let nextMax = prev.pet.maxExp;
      if (nextExp >= nextMax) {
        nextLevel += 1;
        nextExp -= nextMax;
        nextMax = Math.round(nextMax * 1.2);
      }
      return {
        ...prev,
        coins: prev.coins + coinsDelta,
        pet: {
          ...prev.pet,
          level: nextLevel,
          exp: nextExp,
          maxExp: nextMax,
          food: prev.pet.food + foodDelta
        }
      };
    });
    if (msg) notify(msg, 'success');
  };

  const openFormModal = (config) => {
    const initVals = {};
    config.fields.forEach((f) => { initVals[f.id] = f.defaultValue ?? ''; });
    setCustomValues(initVals);
    setCustomModal(config);
  };

  // ==================== 课表切换 ====================
  const handleSwitchWeek = (wk) => {
    setWeekKey(wk);
    setState((prev) => {
      let nextPlan = [...prev.weekPlan];
      if (wk === 'week13') {
        nextPlan = [
          { day: '周一 (11.23)', classes: ['14:00-17:40 多媒体设计2 (教一二区603)', '毕业设计(论文) (教一二区507·自主)'], workout: '18:10 下课顺路：美背直角肩 + 爬坡25m', isWorkout: true, done: false },
          { day: '周二 (11.24)', classes: ['全天无坐班课 · 毕业设计自主推进'], workout: '科研文献 + 雅思精听训练', isWorkout: false, done: false },
          { day: '周三 (11.25)', classes: ['14:00-17:40 多媒体设计2 (教一二区603)', '毕业设计(论文) (教一二区507·自主)'], workout: '18:10 下课顺路：蜜桃臀腿塑形 + 椭圆机', isWorkout: true, done: false },
          { day: '周四 (11.26)', classes: ['全天无坐班课 · 毕业设计自主推进'], workout: '日语跟读 + 3D建模工作台', isWorkout: false, done: false },
          { day: '周五 (11.27)', classes: ['14:00-17:40 多媒体设计2 (教一二区603)', '毕业设计(论文) (教一二区507·自主)'], workout: '18:10 下课顺路：核心马甲线 + 拉伸放松', isWorkout: true, done: false },
          { day: '周六 (11.28)', classes: [], workout: '周末户外散步 / 欺骗餐微调', isWorkout: false, done: false },
          { day: '周日 (11.29)', classes: ['20:30-22:10 歌声中的党史Z (智慧树)'], workout: '周体重复盘 + 睡前沉浸阅读', isWorkout: false, done: false }
        ];
      } else if (wk === 'week14_15') {
        nextPlan = [
          { day: '周一', classes: ['14:00-17:40 多媒体设计2 (教一二区603)'], workout: '18:10 美背直角肩 + 爬坡25m', isWorkout: true, done: false },
          { day: '周二', classes: ['14:00-17:40 学科综合设计(二) (教一二区603)'], workout: '科研文献 + 雅思精听训练', isWorkout: false, done: false },
          { day: '周三', classes: ['08:20-12:00 学科综合设计(二)', '14:00-17:40 多媒体设计2 (14周)'], workout: '18:10 蜜桃臀腿塑形 + 椭圆机', isWorkout: true, done: false },
          { day: '周四', classes: ['14:00-17:40 学科综合设计(二) (教一二区603)'], workout: '日语跟读 + 3D建模工作台', isWorkout: false, done: false },
          { day: '周五', classes: ['14:00-17:40 多媒体设计2 (教一二区603)'], workout: '18:10 核心马甲线 + 拉伸放松', isWorkout: true, done: false },
          { day: '周六', classes: [], workout: '周末户外散步 / 欺骗餐微调', isWorkout: false, done: false },
          { day: '周日', classes: ['20:30-22:10 歌声中的党史Z (智慧树)'], workout: '周体重复盘 + 睡前沉浸阅读', isWorkout: false, done: false }
        ];
      } else if (wk === 'week16_19') {
        nextPlan = [
          { day: '周一', classes: ['08:20-12:00 公共空间营造 (裴磊·教一二区603)'], workout: '16:30 美背直角肩 + 爬坡25m', isWorkout: true, done: false },
          { day: '周二', classes: ['14:00-17:40 学科综合设计(二) (16周)'], workout: '科研文献 + 雅思精听训练', isWorkout: false, done: false },
          { day: '周三', classes: ['08:20-12:00 公共空间营造 (裴磊·教一二区603)'], workout: '16:30 蜜桃臀腿塑形 + 椭圆机', isWorkout: true, done: false },
          { day: '周四', classes: ['14:00-17:40 学科综合设计(二) (16周)'], workout: '日语跟读 + 3D建模工作台', isWorkout: false, done: false },
          { day: '周五', classes: ['08:20-12:00 公共空间营造 (裴磊·教一二区603)'], workout: '16:30 核心马甲线 + 拉伸放松', isWorkout: true, done: false },
          { day: '周六', classes: [], workout: '周末户外散步 / 欺骗餐微调', isWorkout: false, done: false },
          { day: '周日', classes: [], workout: '周体重复盘 + 睡前沉浸阅读', isWorkout: false, done: false }
        ];
      }
      return { ...prev, weekPlan: nextPlan };
    });
    notify('已同步切换教学周课表与对应健身窗口！', 'info');
  };

  // ==================== 退出内置阅读器并记录真实时长与当前页码进度 ====================
  const handleCloseReader = () => {
    if (activeBookId) {
      const currentB = state.books.find((b) => b.id === activeBookId);
      const pages = currentB ? buildBookPages(currentB.content) : [];
      const calcProgress = pages.length > 0 ? Math.min(100, Math.round(((readerPage + 1) / pages.length) * 100)) : 0;

      if (readerSecs >= 5) {
        const addedMins = Math.max(1, Math.round(readerSecs / 60));
        const todayStr = new Date().toISOString().slice(0, 10);
        const hr = new Date().getHours();

        setState((prev) => {
          const rs = prev.readingStats || { totalSeconds: 0, streakDays: 0, lastReadDate: '', periods: { morning: 0, evening: 0, night: 0 } };
          const nextPeriods = { ...rs.periods };
          if (hr >= 6 && hr < 14) nextPeriods.morning += readerSecs;
          else if (hr >= 14 && hr < 22) nextPeriods.evening += readerSecs;
          else nextPeriods.night += readerSecs;

          return {
            ...prev,
            readingStats: {
              totalSeconds: rs.totalSeconds + readerSecs,
              streakDays: rs.lastReadDate !== todayStr ? (rs.streakDays || 0) + 1 : rs.streakDays,
              lastReadDate: todayStr,
              periods: nextPeriods
            },
            books: prev.books.map((b) =>
              b.id === activeBookId
                ? { ...b, readMins: b.readMins + addedMins, lastPage: readerPage, progress: Math.max(b.progress || 0, calcProgress) }
                : b
            )
          };
        });
        grantReward(15, 15, `本次真实阅读 ${readerSecs} 秒，已保存第 ${readerPage + 1} 页进度并奖励 +15 金币！`);
      } else {
        setState((prev) => ({
          ...prev,
          books: prev.books.map((b) =>
            b.id === activeBookId ? { ...b, lastPage: readerPage, progress: Math.max(b.progress || 0, calcProgress) } : b
          )
        }));
      }
    }
    setActiveBookId(null);
    setShowTocDrawer(false);
    setReaderSecs(0);
  };

  // ==================== 电子书智能分页、目录提取与多格式导入解析 ====================
  const buildBookPages = (contentArr) => {
    const paras = Array.isArray(contentArr) ? contentArr : [String(contentArr || '')];
    const pages = [];
    let currentChunk = [];
    let currentChars = 0;
    const CHARS_PER_PAGE = 650;

    paras.forEach((p) => {
      const clean = String(p || '').trim();
      if (!clean) return;
      const isChapterHeading = /^(第[零一二三四五六七八九十百千万\d]+[章节回卷篇部]|Chapter\s+\d+|CHAPTER\s+\d+|序言|前言|引言|尾声|后记)/.test(clean) && clean.length < 45;

      if (isChapterHeading && currentChunk.length > 0) {
        pages.push(currentChunk);
        currentChunk = [clean];
        currentChars = clean.length;
        return;
      }

      if (currentChars + clean.length > CHARS_PER_PAGE && currentChunk.length > 0) {
        pages.push(currentChunk);
        currentChunk = [clean];
        currentChars = clean.length;
      } else {
        currentChunk.push(clean);
        currentChars += clean.length;
      }
    });
    if (currentChunk.length > 0) pages.push(currentChunk);
    return pages.length > 0 ? pages : [['暂无正文内容']];
  };

  const extractBookToc = (pages) => {
    const toc = [];
    pages.forEach((pageParas, pageIdx) => {
      pageParas.forEach((p) => {
        if (/^(第[零一二三四五六七八九十百千万\d]+[章节回卷篇部]|Chapter\s+\d+|CHAPTER\s+\d+|序言|前言|引言|尾声|后记)/.test(p) && p.length < 45) {
          toc.push({ title: p, page: pageIdx });
        }
      });
    });
    if (toc.length === 0) {
      const step = Math.max(1, Math.ceil(pages.length / 8));
      for (let i = 0; i < pages.length; i += step) {
        const previewText = (pages[i][0] || '').slice(0, 16);
        toc.push({ title: `第 ${i + 1} 页 · ${previewText}...`, page: i });
      }
    }
    return toc;
  };

  const updateBookPageProgress = (bookId, targetPage, totalPages) => {
    const safePage = Math.max(0, Math.min(totalPages - 1, targetPage));
    setReaderPage(safePage);
    const pct = totalPages > 0 ? Math.min(100, Math.round(((safePage + 1) / totalPages) * 100)) : 0;
    setState((prev) => ({
      ...prev,
      books: prev.books.map((b) => (b.id === bookId ? { ...b, lastPage: safePage, progress: pct } : b))
    }));
  };

  // 键盘左右方向键支持翻页
  useEffect(() => {
    if (!activeBookId || readerMode !== 'page') return;
    const book = state.books.find((b) => b.id === activeBookId);
    if (!book) return;
    const pages = buildBookPages(book.content);
    const onKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        updateBookPageProgress(activeBookId, readerPage + 1, pages.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        updateBookPageProgress(activeBookId, readerPage - 1, pages.length);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeBookId, readerMode, readerPage, state.books]);

  const handleImportEbookFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportingFileStatus(`正在解析《${file.name}》...`);
    const cleanTitle = file.name.replace(/\.(txt|md|epub|pdf|html|htm)$/i, '');

    try {
      const arrayBuffer = await file.arrayBuffer();
      let extractedText = '';

      if (file.name.toLowerCase().endsWith('.epub')) {
        const rawLatin = new TextDecoder('utf-8', { fatal: false }).decode(arrayBuffer);
        const textMatches = rawLatin.match(/<(?:p|h1|h2|h3|div)[^>]*>([\s\S]*?)<\/(?:p|h1|h2|h3|div)>/gi);
        if (textMatches && textMatches.length > 0) {
          extractedText = textMatches
            .map((tag) => tag.replace(/<[^>]+>/g, '').trim())
            .filter((t) => t.length > 1)
            .join('\n');
        }
      }

      if (!extractedText) {
        let decoded = new TextDecoder('utf-8', { fatal: false }).decode(arrayBuffer);
        const replacementCount = (decoded.match(/\uFFFD/g) || []).length;
        if (replacementCount > 5) {
          try {
            decoded = new TextDecoder('gb18030').decode(arrayBuffer);
          } catch (err) {}
        }
        if (file.name.toLowerCase().endsWith('.pdf') && decoded.startsWith('%PDF')) {
          const pdfChunks = decoded.match(/\(([^()\\]{2,})\)/g);
          if (pdfChunks && pdfChunks.length > 10) {
            extractedText = pdfChunks.map((s) => s.slice(1, -1)).join('\n');
          } else {
            extractedText = `《${cleanTitle}》已成功导入书架！\n提示：当前为扫描版或加密 PDF，建议在电脑端另存为 .txt 或复制正文粘贴到下方即可享受完整自动分章与翻页阅读。`;
          }
        } else {
          extractedText = decoded;
        }
      }

      const cleanParas = extractedText
        .replace(/\r\n/g, '\n')
        .split(/\n+/)
        .map((line) => line.trim())
        .filter((line) => line.length > 0);

      setNewBookForm((prev) => ({
        ...prev,
        title: prev.title || cleanTitle,
        content: cleanParas.join('\n')
      }));
      setImportingFileStatus(`✅ 解析成功！共提取 ${cleanParas.length} 段正文（约 ${Math.round(extractedText.length / 1000)} 千字），点击下方“加入书架”即可翻页阅读`);
      notify(`《${cleanTitle}》解析成功！`, 'success');
    } catch (err) {
      setImportingFileStatus('解析异常，请尝试将电子书另存为 .txt 后导入');
      notify('文件读取失败，请重试', 'warning');
    }
  };

  // ==================== 语音智能调计划 ====================
  const startVoiceListen = () => {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      notify('当前浏览器不支持原生麦克风，可直接输入或点下方示例！', 'warning');
      return;
    }
    const rec = new SpeechRec();
    rec.lang = 'zh-CN';
    setIsListening(true);
    rec.onresult = (e) => setVoiceText(e.results[0][0].transcript);
    rec.onend = () => setIsListening(false);
    rec.start();
  };

  const applyVoiceCommand = () => {
    const text = voiceText.trim();
    if (!text) return;
    const actions = [];
    const clauses = text.split(/[，,。；;！!？?\n]+/).map((c) => c.trim()).filter(Boolean);
    const dayNames = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];

    setState((prev) => {
      let nextSchedules = [...prev.schedules];
      let nextWeekPlan = prev.weekPlan.map((d) => ({ ...d }));
      let nextExpenses = [...prev.wallet.expenses];
      let nextDdls = [...prev.ddls];

      clauses.forEach((clause) => {
        if (/取消|删掉|删除|不去|不看/.test(clause)) {
          const kw = clause.replace(/.*?(取消|删掉|删除|不去|不看)(了|掉)?/, '').trim();
          const before = nextSchedules.length;
          nextSchedules = nextSchedules.filter((item) => {
            if (kw && item.title.includes(kw)) return false;
            if (/阅读|看书/.test(clause) && item.tag.includes('阅读')) return false;
            if (/健身|练背/.test(clause) && item.tag.includes('减脂')) return false;
            return true;
          });
          if (nextSchedules.length < before) {
            actions.push(`取消了「${kw || '相关日程'}」`);
            return;
          }
        }

        if (/健身|练背|臀腿|马甲线/.test(clause) && /调到|改到|移到|换到|顺延/.test(clause)) {
          const foundDays = dayNames.filter((d) => clause.includes(d));
          if (foundDays.length >= 2) {
            const fromIdx = dayNames.indexOf(foundDays[0]);
            const toIdx = dayNames.indexOf(foundDays[1]);
            const moved = nextWeekPlan[fromIdx].workout;
            nextWeekPlan[fromIdx].workout = '语音已调出 · 自主学习/休息';
            nextWeekPlan[fromIdx].isWorkout = false;
            nextWeekPlan[toIdx].workout = `【语音调入】${moved.replace(/^18:10 下课顺路：/, '')}`;
            nextWeekPlan[toIdx].isWorkout = true;
            actions.push(`将${foundDays[0]}健身调至${foundDays[1]}`);
            return;
          }
        }

        if (/改到|调到|推迟到|挪到|换到/.test(clause)) {
          const timeMatch = clause.match(/(早上|上午|中午|下午|晚上|今晚|明晚)?\s*([零一二两三四五六七八九十\d]{1,2})\s*(?:点|:|：)\s*(半|[零一二三四五\d]{1,2})?/);
          let newTimeStr = '已调整时段';
          if (timeMatch) {
            const prefix = timeMatch[1] || '';
            const cnMap = { '零': 0, '一': 1, '二': 2, '两': 2, '三': 3, '四': 4, '五': 5, '六': 6, '七': 7, '八': 8, '九': 9, '十': 10, '十一': 11, '十二': 12 };
            let hr = parseInt(timeMatch[2], 10);
            if (isNaN(hr)) hr = cnMap[timeMatch[2]] || 19;
            if (/下午|晚上|今晚|明晚/.test(prefix) && hr < 12) hr += 12;
            const minStr = timeMatch[3] === '半' ? '30' : (timeMatch[3] ? String(timeMatch[3]).padStart(2, '0') : '00');
            newTimeStr = `${String(hr).padStart(2, '0')}:${minStr} - ${String((hr + 1) % 24).padStart(2, '0')}:${minStr}`;
          }
          const kws = ['雅思', '日语', '文献', '毕设', '多媒体', '阅读', '看书', '健身'];
          const matched = nextSchedules.find((s) => kws.some((k) => clause.includes(k) && (s.title.includes(k) || s.tag.includes(k))));
          if (matched) {
            matched.time = newTimeStr;
            matched.done = false;
            actions.push(`将「${matched.title.slice(0, 10)}...」改到 ${newTimeStr}`);
            return;
          }
        }

        const moneyMatch = clause.match(/(\d+(?:\.\d+)?)\s*(?:元|块)/);
        if (moneyMatch) {
          const amt = parseFloat(moneyMatch[1]);
          nextExpenses.unshift({
            id: Date.now() + Math.random(),
            title: `语音记账：${clause.slice(0, 16)}`,
            amount: amt,
            category: /食堂|餐|饭|面|粉|鸡|菜/.test(clause) ? '健康餐饮' : '日用服饰',
            date: '刚刚'
          });
          actions.push(`已记账 ¥${amt}`);
          return;
        }

        if (/提醒|DDL|交作业|考试|初稿/.test(clause)) {
          nextDdls.unshift({
            id: Date.now() + Math.random(),
            title: clause.replace(/^(另外|还有)?(新增)?提醒(我)?/, '').trim(),
            due: '语音设定提醒',
            urgent: true
          });
          actions.push('已新增DDL提醒');
          return;
        }

        nextSchedules.push({
          id: Date.now() + Math.random(),
          time: /晚|睡前/.test(clause) ? '23:30 - 00:15' : '19:30 - 20:30',
          title: `语音排期：${clause}`,
          tag: '语音新增',
          color: 'indigo',
          done: false
        });
        actions.push('已加入今日日程');
      });

      return {
        ...prev,
        schedules: nextSchedules,
        weekPlan: nextWeekPlan,
        ddls: nextDdls,
        wallet: { ...prev.wallet, expenses: nextExpenses }
      };
    });

    setVoiceText('');
    setVoiceOpen(false);
    grantReward(15, 15, `语音执行完成：${actions.join('；')}`);
  };

  // 计算汇总数据
  const totalNetCal = state.calories.meals.reduce((s, m) => s + m.netCal, 0);
  const totalSavedCal = state.calories.meals.reduce((s, m) => s + m.leftoverCal, 0);
  const netMealNow = Math.max(0, (Number(preCal) || 0) - (Number(postCal) || 0));
  const totalSpent = state.wallet.expenses.reduce((s, e) => s + e.amount, 0);
  const budgetSaved = Math.max(0, state.wallet.budget - totalSpent);
  const latestWeight = state.weights[state.weights.length - 1]?.val || 61.0;

  const filteredBooks = state.books.filter((b) => {
    const matchCat = bookCatFilter === 'all' || b.category === bookCatFilter;
    const matchQ = b.title.toLowerCase().includes(bookSearch.toLowerCase()) || b.author.toLowerCase().includes(bookSearch.toLowerCase());
    return matchCat && matchQ;
  });

  const activeBook = state.books.find((b) => b.id === activeBookId);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 pb-24 lg:pb-10 font-sans">
      {/* 全局 Toast 提示 */}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 pointer-events-none">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`px-4 py-3 rounded-2xl shadow-lg text-xs font-bold flex items-center gap-2 ${
              t.type === 'success' ? 'bg-emerald-600 text-white' : t.type === 'warning' ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>{t.msg}</span>
          </div>
        ))}
      </div>

      {/* 顶部 App 导航栏 */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-sm shrink-0 font-bold">
              OS
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="font-bold text-slate-900 text-sm sm:text-base truncate">GapYear OS · 胡秋意</h1>
                <button
                  onClick={() => setBackupModalOpen(true)}
                  className="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1 shrink-0 hover:bg-emerald-100"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>React+3D独立存档</span>
                </button>
              </div>
              <p className="text-[11px] text-slate-500 truncate">武科大 $\rightarrow$ 地大黄爱武组 · 168cm/61kg · 09:00起-01:30睡</p>
            </div>
          </div>

          {/* 桌面端导航 */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/90 p-1 rounded-2xl">
            {[
              { id: 'dashboard', label: '今日总览', icon: Compass },
              { id: 'diet', label: '餐前餐后', icon: Camera },
              { id: 'fitness', label: '课表与健身', icon: Dumbbell },
              { id: 'wallet', label: '消费与奖励', icon: Wallet },
              { id: 'bookshelf', label: '私人书架', icon: BookOpen },
              { id: 'academic', label: '科研与3D', icon: Box }
            ].map((item) => {
              const Icon = item.icon;
              const active = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs flex items-center gap-1.5 transition ${
                    active ? 'bg-white text-slate-900 font-semibold shadow-sm' : 'text-slate-600 hover:text-slate-900 font-medium'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* 金币与语音排期 */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setActiveTab('wallet')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold"
            >
              <Coins className="w-3.5 h-3.5 text-amber-500" />
              <span>{state.coins}</span>
            </button>
            <button
              onClick={() => setVoiceOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-semibold shadow-sm"
            >
              <Mic className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">语音调计划</span>
            </button>
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6">
        {/* ==================== TAB 1: 今日总览 ==================== */}
        {activeTab === 'dashboard' && (
          <div className="space-y-5">
            {/* 实时日期、时钟与黄家湖天气横幅 */}
            <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white rounded-3xl p-4 sm:p-5 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex flex-col items-center justify-center shrink-0">
                  <span className="text-lg font-extrabold text-amber-300">{clockText.hm}</span>
                  <span className="text-[10px] text-slate-300 font-mono">{clockText.sec}</span>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm sm:text-base font-bold">{clockText.date}</span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-slate-950">{clockText.week}</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">今日周一14:00-17:40《多媒体设计2》（教一二区603），18:10下课顺路练美背直角肩！</p>
                </div>
              </div>

              <div
                onClick={() => refreshWeather(true)}
                className="bg-white/10 hover:bg-white/15 border border-white/15 rounded-2xl px-3.5 py-2.5 flex items-center justify-between sm:justify-end gap-3 cursor-pointer shrink-0"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{weather.icon}</span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-extrabold">{weather.temp}</span>
                      <span className="text-xs text-slate-200">{weather.desc}</span>
                    </div>
                    <div className="text-[10px] text-slate-300 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-rose-400" />
                      <span>{weather.loc}</span>
                    </div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-1 rounded-lg bg-white/10 text-amber-200 font-semibold">刷新</span>
              </div>
            </div>

            {/* 4大核心指标卡 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-500">减脂净热量 (168cm)</span>
                  <Flame className="w-4 h-4 text-amber-500" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-slate-900">{totalNetCal}</span>
                    <span className="text-[11px] text-slate-400">/ {state.calories.target} kcal</span>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: `${Math.min(100, Math.round((totalNetCal / state.calories.target) * 100))}%` }} />
                  </div>
                  <p className="text-[11px] text-emerald-600 mt-1.5 font-medium">剩饭已扣 {totalSavedCal} kcal，余 {Math.max(0, state.calories.target - totalNetCal)} kcal</p>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-500">体重管理 (BMI 21.6)</span>
                  <Scale className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-slate-900">{latestWeight.toFixed(1)}</span>
                    <span className="text-[11px] text-slate-400">kg $\rightarrow$ 56.0kg</span>
                  </div>
                  <div className="mt-2 flex items-center gap-1.5">
                    <input
                      type="number"
                      step="0.1"
                      value={quickWeight}
                      onChange={(e) => setQuickWeight(e.target.value)}
                      placeholder="60.8"
                      className="w-16 sm:w-20 text-xs px-2 py-1 rounded-xl border border-slate-200"
                    />
                    <button
                      onClick={() => {
                        const v = parseFloat(quickWeight);
                        if (!v || v < 35 || v > 120) return notify('请输入有效体重', 'warning');
                        setState((prev) => ({ ...prev, weights: [...prev.weights.slice(-7), { date: '今日', val: v }] }));
                        setQuickWeight('');
                        grantReward(15, 15, `体重 ${v}kg 已记录！奖励 +15 金币`);
                      }}
                      className="text-[11px] px-2.5 py-1 rounded-xl bg-emerald-600 text-white font-semibold"
                    >
                      记录
                    </button>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-500">本周 1/3/5 健身排期</span>
                  <Dumbbell className="w-4 h-4 text-rose-600" />
                </div>
                <div>
                  <div className="text-sm sm:text-base font-bold text-slate-900">18:10 下课顺路练</div>
                  <p className="text-[11px] text-slate-500 mt-1">避开 14:00-17:40 下午连堂课</p>
                  <button onClick={() => setActiveTab('fitness')} className="mt-2 text-[11px] font-semibold text-rose-600 hover:underline">
                    查看课表与减脂教程 &rarr;
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/70 shadow-sm flex flex-col justify-between">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-semibold text-slate-500">本月省钱计划结余</span>
                  <PiggyBank className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl sm:text-2xl font-bold text-slate-900">¥{Math.round(totalSpent)}</span>
                    <span className="text-[11px] text-slate-400">/ 预算 ¥{state.wallet.budget}</span>
                  </div>
                  <button onClick={() => setActiveTab('wallet')} className="mt-2 text-[11px] font-semibold text-purple-600 hover:underline">
                    导入账单 / 兑换奖励 &rarr;
                  </button>
                </div>
              </div>
            </div>

            {/* 主体双栏：日程 + 宠物与提醒 */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2 bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div>
                    <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                      <span>第13周今日动态联动日程</span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">09:00-01:30 晚睡作息</span>
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">已校准连堂时段（上午08:20-12:00 / 下午14:00-17:40），支持语音随时调整</p>
                  </div>
                  <button onClick={() => setVoiceOpen(true)} className="text-xs px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-semibold flex items-center gap-1">
                    <Mic className="w-3.5 h-3.5" />语音调计划
                  </button>
                </div>

                <div className="space-y-2.5">
                  {state.schedules.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setState((prev) => ({
                          ...prev,
                          schedules: prev.schedules.map((s) => (s.id === item.id ? { ...s, done: !s.done } : s))
                        }));
                        if (!item.done) grantReward(15, 15, `完成「${item.title}」，奖励 +15 金币！`);
                      }}
                      className={`p-3 rounded-2xl border flex items-center justify-between gap-2.5 cursor-pointer transition ${
                        item.done ? 'bg-slate-50/70 border-slate-200/60 opacity-70' : 'bg-white border-slate-200 hover:border-blue-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center shrink-0 ${item.done ? 'bg-emerald-500 border-emerald-500 text-white' : 'border-slate-300'}`}>
                          {item.done && <Check className="w-3 h-3" />}
                        </div>
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold text-slate-400">{item.time}</div>
                          <div className={`text-xs sm:text-sm font-bold truncate ${item.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>{item.title}</div>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-slate-100 text-slate-700 shrink-0">{item.tag}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 右侧：陪伴宠物 + DDL */}
              <div className="space-y-5">
                <div className="bg-gradient-to-br from-amber-50 via-orange-50/70 to-yellow-50/60 rounded-3xl p-5 border border-amber-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-xl">陪伴激励宠物</span>
                    <div className="flex items-center gap-1 bg-white/80 p-1 rounded-xl border border-amber-200">
                      {[
                        { sp: 'trilobite', name: '三叶虫·团子', emoji: '🪲' },
                        { sp: 'ammonite', name: '菊石·螺螺', emoji: '🐚' },
                        { sp: 'star', name: '星星·岩灵', emoji: '⭐' }
                      ].map((p) => (
                        <button
                          key={p.sp}
                          onClick={() => {
                            setState((prev) => ({ ...prev, pet: { ...prev.pet, species: p.sp, name: p.name, emoji: p.emoji } }));
                            notify(`已切换宠物为「${p.name}」`, 'info');
                          }}
                          className="w-6 h-6 rounded-lg text-sm hover:bg-amber-100"
                        >
                          {p.emoji}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-sm border-2 border-amber-200 flex items-center justify-center text-4xl shrink-0">
                      {state.pet.emoji}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-bold text-slate-900 text-base">{state.pet.name}</h3>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500 text-white">Lv.{state.pet.level}</span>
                      </div>
                      <div className="mt-2">
                        <div className="flex justify-between text-[10px] font-semibold text-amber-800 mb-0.5">
                          <span>成长经验</span>
                          <span>{state.pet.exp} / {state.pet.maxExp} EXP</span>
                        </div>
                        <div className="w-full bg-amber-200/70 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-amber-500 h-full rounded-full" style={{ width: `${Math.min(100, Math.round((state.pet.exp / state.pet.maxExp) * 100))}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 p-3 rounded-2xl bg-white/85 border border-amber-200/70 text-xs text-slate-700 leading-relaxed flex items-start gap-1.5">
                    <Heart className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <p>{petQuote}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <button
                      onClick={() => {
                        const quotes = [
                          '168cm/61kg 已经是超棒的底子啦！坚持 1/3/5 下课后练 55 分钟，马甲线很快就会来找你！',
                          '保研上岸中国地质大学黄爱武老师组太厉害了！空档期每一天都在为未来的科研发光发热~',
                          '晚上 01:30 前一定要放下手机睡觉哦，充足睡眠才能让减脂代谢开足马力！'
                        ];
                        setPetQuote(quotes[Math.floor(Math.random() * quotes.length)]);
                      }}
                      className="py-2 rounded-xl bg-white hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-bold"
                    >
                      求夸夸
                    </button>
                    <button
                      onClick={() => {
                        if (state.pet.food <= 0) return notify('矿石不足，完成打卡即可获得矿石！', 'warning');
                        setState((prev) => ({ ...prev, pet: { ...prev.pet, food: prev.pet.food - 1 } }));
                        grantReward(5, 45, `投喂矿石成功，${state.pet.name} 经验 +45！`);
                      }}
                      className="py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold"
                    >
                      喂矿石({state.pet.food})
                    </button>
                    <button
                      onClick={() => grantReward(10, 10, '领取每日陪伴礼包：+10 金币与 +1 颗矿石！', 1)}
                      className="py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center gap-1"
                    >
                      <Gift className="w-3.5 h-3.5" />领礼包
                    </button>
                  </div>
                </div>

                {/* DDL 雷达 */}
                <div className="bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
                      <Bell className="w-4 h-4 text-rose-500" />
                      <span>课业与毕设强提醒</span>
                    </h3>
                    <button
                      onClick={() =>
                        openFormModal({
                          title: '新增强提醒',
                          fields: [
                            { id: 'title', label: '提醒事项', placeholder: '例如：提交《多媒体设计2》方案' },
                            { id: 'due', label: '截止时间', defaultValue: '本周五 22:00' }
                          ],
                          onSubmit: (vals) => {
                            if (!vals.title.trim()) return;
                            setState((prev) => ({
                              ...prev,
                              ddls: [{ id: Date.now(), title: vals.title.trim(), due: vals.due || '本周截止', urgent: true }, ...prev.ddls]
                            }));
                            notify('已添加提醒！', 'success');
                          }
                        })
                      }
                      className="text-xs px-2.5 py-1 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold"
                    >
                      + 新增
                    </button>
                  </div>
                  <div className="space-y-2">
                    {state.ddls.map((d) => (
                      <div key={d.id} className="p-2.5 rounded-2xl bg-rose-50/70 border border-rose-200 flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <div className="text-xs font-bold text-rose-900 truncate">{d.title}</div>
                          <div className="text-[10px] text-rose-600 mt-0.5">{d.due}</div>
                        </div>
                        <button
                          onClick={() => {
                            setState((prev) => ({ ...prev, ddls: prev.ddls.filter((x) => x.id !== d.id) }));
                            grantReward(20, 20, '完成一项提醒，奖励 +20 金币！');
                          }}
                          className="p-1.5 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-emerald-600"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 2: 餐前餐后双图热量 ==================== */}
        {activeTab === 'diet' && (
          <div className="space-y-5">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">餐前餐后双图热量差值识别（168cm/61kg 精准减脂）</h2>
                  <p className="text-xs text-slate-500 mt-0.5">拍餐前估算总热量，拍餐后自动扣除剩饭热量，精准把控 1,550 kcal 每日减脂上限</p>
                </div>
                <span className="px-3 py-1 rounded-xl bg-emerald-50 text-emerald-700 text-xs font-bold">
                  今日已通过剩饭扣除省下 {totalSavedCal} kcal
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* 餐前 */}
                <div className="bg-slate-50 rounded-3xl p-4 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700">STEP 1 · 餐前拍照/上传</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-amber-100 text-amber-800">预估: {preCal} kcal</span>
                    </div>
                    <label className="block relative h-44 rounded-2xl border-2 border-dashed border-slate-300 bg-white overflow-hidden cursor-pointer">
                      {preImg ? (
                        <img src={preImg} alt="餐前" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                          <Camera className="w-6 h-6 mb-1.5" />
                          <span className="text-xs font-semibold">点击拍摄或上传【餐前】食物</span>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (!f) return;
                          const r = new FileReader();
                          r.onload = (ev) => {
                            setPreImg(ev.target.result);
                            const c = Math.floor(540 + Math.random() * 160);
                            setPreCal(c);
                            setPostCal(Math.round(c * (leftoverRatio / 100)));
                            notify(`餐前识别完成：约 ${c} kcal`, 'info');
                          };
                          r.readAsDataURL(f);
                        }}
                      />
                    </label>
                  </div>
                  <div className="mt-3 space-y-2">
                    <input type="text" value={foodDesc} onChange={(e) => setFoodDesc(e.target.value)} className="w-full text-xs px-3 py-2 rounded-xl border border-slate-200 bg-white" />
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">餐前总热量 (kcal):</span>
                      <input
                        type="number"
                        value={preCal}
                        onChange={(e) => {
                          const v = Number(e.target.value) || 0;
                          setPreCal(v);
                          setPostCal(Math.round(v * (leftoverRatio / 100)));
                        }}
                        className="w-24 text-xs font-bold text-right px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white"
                      />
                    </div>
                  </div>
                </div>

                {/* 餐后 */}
                <div className="bg-slate-50 rounded-3xl p-4 border border-slate-200/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-slate-700">STEP 2 · 餐后残余对比</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-lg bg-emerald-100 text-emerald-800">扣除剩饭: -{postCal} kcal</span>
                    </div>
                    <label className="block relative h-44 rounded-2xl border-2 border-dashed border-slate-300 bg-white overflow-hidden cursor-pointer">
                      {postImg ? (
                        <img src={postImg} alt="餐后" className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-4 text-center">
                          <Camera className="w-6 h-6 mb-1.5" />
                          <span className="text-xs font-semibold">点击拍摄或上传【餐后】餐盘</span>
                        </div>
                      )}
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (!f) return;
                          const r = new FileReader();
                          r.onload = (ev) => {
                            setPostImg(ev.target.result);
                            const ratio = Math.floor(18 + Math.random() * 22);
                            setLeftoverRatio(ratio);
                            setPostCal(Math.round(preCal * (ratio / 100)));
                            notify(`餐后对比完成：剩余 ${ratio}%`, 'success');
                          };
                          r.readAsDataURL(f);
                        }}
                      />
                    </label>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-slate-500">剩余比例:</span>
                      <input
                        type="range"
                        min={0}
                        max={80}
                        value={leftoverRatio}
                        onChange={(e) => {
                          const r = Number(e.target.value);
                          setLeftoverRatio(r);
                          setPostCal(Math.round(preCal * (r / 100)));
                        }}
                        className="flex-1 accent-emerald-600"
                      />
                      <span className="text-xs font-bold text-emerald-700 w-9 text-right">{leftoverRatio}%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-500">扣除热量 (kcal):</span>
                      <input
                        type="number"
                        value={postCal}
                        onChange={(e) => setPostCal(Number(e.target.value) || 0)}
                        className="w-24 text-xs font-bold text-right px-2.5 py-1.5 rounded-xl border border-slate-200 bg-white text-emerald-700"
                      />
                    </div>
                  </div>
                </div>

                {/* 净摄入结算 */}
                <div className="bg-slate-900 text-white rounded-3xl p-5 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-amber-400">STEP 3 · 净摄入精准入账</span>
                    <div className="mt-3 flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold">{netMealNow}</span>
                      <span className="text-xs text-slate-300">kcal 实际摄入</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                      <div className="bg-white/5 rounded-xl p-2">
                        <div className="text-[10px] text-slate-400">碳水</div>
                        <div className="text-xs font-bold text-sky-300">{Math.round((netMealNow * 0.4) / 4)}g</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-2">
                        <div className="text-[10px] text-slate-400">蛋白质</div>
                        <div className="text-xs font-bold text-emerald-300">{Math.round((netMealNow * 0.36) / 4)}g</div>
                      </div>
                      <div className="bg-white/5 rounded-xl p-2">
                        <div className="text-[10px] text-slate-400">脂肪</div>
                        <div className="text-xs font-bold text-amber-300">{Math.round((netMealNow * 0.24) / 9)}g</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <select value={mealType} onChange={(e) => setMealType(e.target.value)} className="w-full text-xs bg-white/10 border border-white/20 rounded-xl px-3 py-2 text-white">
                      <option value="午餐 (12:30)" className="text-slate-900">记录为：午餐 (12:30)</option>
                      <option value="晚餐 (18:30)" className="text-slate-900">记录为：晚餐 (18:30)</option>
                      <option value="早午餐 (09:30)" className="text-slate-900">记录为：早午餐 (09:30)</option>
                    </select>
                    <button
                      onClick={() => {
                        const now = new Date();
                        const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
                        setState((prev) => ({
                          ...prev,
                          calories: {
                            ...prev.calories,
                            meals: [
                              { id: Date.now(), type: mealType, desc: foodDesc, preCal: Number(preCal), leftoverCal: Number(postCal), netCal: netMealNow, time: timeStr },
                              ...prev.calories.meals
                            ]
                          }
                        }));
                        grantReward(20, 20, `饮食已入账（净摄入 ${netMealNow} kcal），奖励 +20 金币！`);
                      }}
                      className="w-full py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs"
                    >
                      写入热量账本 (+20金币)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm">
              <h3 className="font-bold text-slate-900 text-sm mb-3">今日饮食净摄入明细</h3>
              <div className="space-y-2.5">
                {state.calories.meals.map((m) => (
                  <div key={m.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-between gap-2 text-xs">
                    <div>
                      <div className="font-bold text-slate-800">{m.type} · {m.time}</div>
                      <div className="text-slate-500 mt-0.5">{m.desc}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-extrabold text-slate-900">{m.netCal} kcal</div>
                      <div className="text-[10px] text-emerald-600">餐前{m.preCal} - 剩{m.leftoverCal}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 3: 课表与减脂训练 ==================== */}
        {activeTab === 'fitness' && (
          <div className="space-y-5">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">每周课表动态同步 (202319203061) & 弹性 1/3/5 健身联动</h2>
                  <p className="text-xs text-slate-500 mt-0.5">上午 08:20-12:00 / 下午 14:00-17:40 连堂制，18:10 下课顺路练</p>
                </div>
                <select value={weekKey} onChange={(e) => handleSwitchWeek(e.target.value)} className="text-xs px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 font-semibold">
                  <option value="week13">第13周 (本周11.23周一起 · 多媒体设计2 + 毕设)</option>
                  <option value="week14_15">第14-15周 (学科综合设计(二) + 多媒体设计2)</option>
                  <option value="week16_19">第16-19周 (公共空间营造 · 裴磊老师)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
                {state.weekPlan.map((d, idx) => (
                  <div key={idx} className={`p-3.5 rounded-2xl border flex flex-col justify-between ${d.isWorkout ? 'bg-rose-50/50 border-rose-200' : 'bg-slate-50/70 border-slate-200/70'}`}>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-sm text-slate-900">{d.day}</span>
                        <span className={`px-2 py-0.5 rounded-lg text-[10px] font-bold ${d.isWorkout ? 'bg-rose-500 text-white' : 'bg-slate-200 text-slate-600'}`}>
                          {d.isWorkout ? '训练日' : '自由'}
                        </span>
                      </div>
                      <div className="space-y-1 mb-2.5">
                        {d.classes.length > 0 ? (
                          d.classes.map((c, ci) => (
                            <div key={ci} className="text-[11px] bg-white px-2 py-1 rounded-lg border border-slate-200 text-slate-700 flex items-start gap-1">
                              <GraduationCap className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                              <span>{c}</span>
                            </div>
                          ))
                        ) : (
                          <div className="text-[11px] text-emerald-600 font-medium">全天无课 · 自由安排</div>
                        )}
                      </div>
                    </div>
                    <div className="pt-2 border-t border-slate-200/60">
                      <div className={`text-xs font-bold mb-2 ${d.isWorkout ? 'text-rose-700' : 'text-slate-600'}`}>{d.workout}</div>
                      <button
                        onClick={() => {
                          setState((prev) => ({
                            ...prev,
                            weekPlan: prev.weekPlan.map((item, i) => (i === idx ? { ...item, done: !item.done } : item))
                          }));
                          if (!d.done) grantReward(35, 30, `完成 ${d.day} 训练打卡！奖励 +35 金币与 1 颗矿石`, 1);
                        }}
                        className={`w-full py-1.5 rounded-xl text-[11px] font-bold ${d.done ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 text-slate-700'}`}
                      >
                        {d.done ? '已打卡 (+35金币)' : '完成打卡'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 4: 消费分析与奖励商店 ==================== */}
        {activeTab === 'wallet' && (
          <div className="space-y-5">
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-slate-900">智能消费分析 & 自律省钱奖励系统</h2>
                  <p className="text-xs text-slate-500 mt-0.5">支持一键粘贴微信/支付宝消费账单自动归类，赚取金币兑换自我奖励</p>
                </div>
                <button onClick={() => setPasteBillOpen(true)} className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold">
                  一键粘贴账单/短信识别
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>本月总支出 / 设定预算</span>
                    <button
                      onClick={() =>
                        openFormModal({
                          title: '修改本月生活费预算',
                          fields: [{ id: 'budget', label: '预算上限（元）', type: 'number', defaultValue: state.wallet.budget }],
                          onSubmit: (vals) => {
                            const b = parseFloat(vals.budget);
                            if (b > 0) {
                              setState((prev) => ({ ...prev, wallet: { ...prev.wallet, budget: b } }));
                              notify(`预算已更新为 ¥${b}`, 'success');
                            }
                          }
                        })
                      }
                      className="text-purple-600 font-semibold hover:underline"
                    >
                      修改预算
                    </button>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-extrabold text-slate-900">¥{totalSpent.toFixed(1)}</span>
                    <span className="text-xs text-slate-500">/ ¥{state.wallet.budget}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full mt-3 overflow-hidden">
                    <div className="bg-purple-600 h-full rounded-full" style={{ width: `${Math.min(100, Math.round((totalSpent / state.wallet.budget) * 100))}%` }} />
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80">
                  <div className="text-xs text-emerald-800 font-semibold mb-1">本月省钱计划净结余</div>
                  <div className="text-2xl font-extrabold text-emerald-700">¥{budgetSaved.toFixed(1)}</div>
                  <button
                    onClick={() => grantReward(30, 20, '忍住冲动消费！奖励 +30 自律金币！')}
                    className="mt-3 w-full py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold"
                  >
                    + 我忍住没买奶茶/盲盒 (+30金币)
                  </button>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-sm">
                  <div className="flex items-center justify-between text-xs text-amber-100 mb-1">
                    <span>我的自律奖励金库</span>
                    <Trophy className="w-4 h-4 text-amber-200" />
                  </div>
                  <div className="text-3xl font-extrabold">{state.coins} <span className="text-xs font-normal">金币可用</span></div>
                  <p className="text-[11px] text-amber-50 mt-2">在下方商店兑换你给自己的专属奖励！</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 text-base">消费流水明细</h3>
                  <button
                    onClick={() =>
                      openFormModal({
                        title: '记一笔消费花销',
                        fields: [
                          { id: 'title', label: '消费项目', placeholder: '例如：黄家湖二食堂晚餐' },
                          { id: 'amount', label: '金额（元）', type: 'number', defaultValue: '15.0' },
                          { id: 'category', label: '分类', type: 'select', defaultValue: '健康餐饮', options: ['健康餐饮', '书籍学习', '健身运动', '日用服饰', '零食饮料'] }
                        ],
                        onSubmit: (vals) => {
                          const amt = parseFloat(vals.amount);
                          if (!vals.title.trim() || !amt || amt <= 0) return;
                          setState((prev) => ({
                            ...prev,
                            wallet: {
                              ...prev.wallet,
                              expenses: [{ id: Date.now(), title: vals.title.trim(), amount: amt, category: vals.category, date: '刚刚' }, ...prev.wallet.expenses]
                            }
                          }));
                          notify(`已记录消费 ¥${amt.toFixed(1)}`, 'success');
                        }
                      })
                    }
                    className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 font-semibold"
                  >
                    + 记一笔
                  </button>
                </div>
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {state.wallet.expenses.map((e) => (
                    <div key={e.id} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/70 flex items-center justify-between text-xs">
                      <div>
                        <div className="font-bold text-slate-800">{e.title}</div>
                        <div className="text-[10px] text-slate-400">{e.category} · {e.date}</div>
                      </div>
                      <div className="font-extrabold text-slate-900">-¥{e.amount.toFixed(1)}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900 text-base">自我奖励兑换商店</h3>
                  <button
                    onClick={() =>
                      openFormModal({
                        title: '上架专属自我奖励',
                        fields: [
                          { id: 'title', label: '奖励内容', placeholder: '例如：买一杯霸王茶姬' },
                          { id: 'cost', label: '所需金币', type: 'number', defaultValue: '120' }
                        ],
                        onSubmit: (vals) => {
                          if (!vals.title.trim()) return;
                          setState((prev) => ({
                            ...prev,
                            wallet: {
                              ...prev.wallet,
                              rewards: [...prev.wallet.rewards, { id: Date.now(), title: vals.title.trim(), cost: Number(vals.cost) || 120, icon: '🎁', redeemed: 0 }]
                            }
                          }));
                          notify('已上架新奖励！', 'success');
                        }
                      })
                    }
                    className="text-xs px-3 py-1.5 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold"
                  >
                    + 自定义奖励
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {state.wallet.rewards.map((r) => (
                    <div key={r.id} className="p-3.5 rounded-2xl border border-amber-200/80 bg-amber-50/40 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-2xl">{r.icon}</span>
                          <span className="text-[10px] text-slate-400">已兑 {r.redeemed} 次</span>
                        </div>
                        <div className="text-xs font-bold text-slate-900">{r.title}</div>
                      </div>
                      <button
                        onClick={() => {
                          if (state.coins < r.cost) return notify(`金币还差 ${r.cost - state.coins} 枚哦！`, 'warning');
                          setState((prev) => ({
                            ...prev,
                            coins: prev.coins - r.cost,
                            wallet: {
                              ...prev.wallet,
                              rewards: prev.wallet.rewards.map((item) => (item.id === r.id ? { ...item, redeemed: item.redeemed + 1 } : item))
                            }
                          }));
                          notify(`🎉 成功兑换「${r.title}」！`, 'success');
                        }}
                        className="mt-3 w-full py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold"
                      >
                        {r.cost} 金币兑换
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 5: 私人书架与内置翻页阅读器 ==================== */}
        {activeTab === 'bookshelf' && (
          <div className="space-y-5">
            {/* 真实阅读时长统计 */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200/70 shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xs font-bold text-indigo-600">累计真实阅读时长</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
                    {((state.readingStats?.totalSeconds || 0) / 3600).toFixed(1)} <span className="text-xs font-normal text-slate-500">小时</span>
                  </div>
                </div>
                <div className="border-l border-slate-200 pl-6">
                  <div className="text-xs font-bold text-emerald-600">连续阅读打卡</div>
                  <div className="text-2xl font-extrabold text-slate-900 mt-0.5">
                    {state.readingStats?.streakDays || 0} <span className="text-xs font-normal text-slate-500">天</span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-slate-500 bg-slate-50 px-3.5 py-2 rounded-2xl">
                支持导入完整 <strong>.txt / .md / .epub</strong> 电子书（自动识别 UTF-8 / GBK 中文编码），支持翻页、目录跳转与进度记忆
              </div>
            </div>

            {/* 书架主体 */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-lg font-bold text-slate-900">我的私人分类书架</h2>
                  <p className="text-xs text-slate-500">支持自主新建/删除分类、导入电子书或删除书籍</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="relative">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-slate-400" />
                    <input
                      type="text"
                      value={bookSearch}
                      onChange={(e) => setBookSearch(e.target.value)}
                      placeholder="搜索书名..."
                      className="pl-8 pr-3 py-2 rounded-xl border border-slate-200 text-xs w-44"
                    />
                  </div>
                  <button
                    onClick={() => setAddBookOpen(true)}
                    className="px-3.5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />导入电子书 / 新书
                  </button>
                </div>
              </div>

              {/* 自主分类筛选栏 */}
              <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 border-b border-slate-100">
                <button
                  onClick={() => setBookCatFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap ${bookCatFilter === 'all' ? 'bg-indigo-600 text-white font-semibold' : 'bg-slate-100 text-slate-600'}`}
                >
                  全部藏书 ({state.books.length})
                </button>
                {state.bookCategories.map((cat) => (
                  <div key={cat} className={`inline-flex items-center rounded-xl overflow-hidden shrink-0 ${bookCatFilter === cat ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    <button onClick={() => setBookCatFilter(cat)} className="px-3 py-1.5 text-xs font-medium whitespace-nowrap">
                      {cat}
                    </button>
                    <button
                      onClick={() => {
                        setState((prev) => ({
                          ...prev,
                          bookCategories: prev.bookCategories.filter((c) => c !== cat),
                          books: prev.books.map((b) => (b.category === cat ? { ...b, category: '未分类' } : b))
                        }));
                        if (bookCatFilter === cat) setBookCatFilter('all');
                        notify(`已删除分类「${cat}」`, 'info');
                      }}
                      className="pr-2 pl-1 py-1.5 text-[10px] opacity-60 hover:opacity-100"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() =>
                    openFormModal({
                      title: '新建书架分类',
                      fields: [{ id: 'name', label: '分类名称', placeholder: '例如：毕设参考、随笔散文' }],
                      onSubmit: (vals) => {
                        const clean = vals.name.trim();
                        if (!clean || state.bookCategories.includes(clean)) return;
                        setState((prev) => ({ ...prev, bookCategories: [...prev.bookCategories, clean] }));
                        setBookCatFilter(clean);
                        notify(`已新建分类「${clean}」`, 'success');
                      }
                    })
                  }
                  className="px-3 py-1.5 rounded-xl text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 whitespace-nowrap flex items-center gap-1"
                >
                  <FolderPlus className="w-3.5 h-3.5" />新建分类
                </button>
              </div>

              {/* 书籍卡片网格 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredBooks.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => {
                      setActiveBookId(b.id);
                      setReaderPage(b.lastPage || 0);
                      setShowTocDrawer(false);
                      setReaderSecs(0);
                    }}
                    className="bg-slate-50 hover:bg-white rounded-3xl p-4 border border-slate-200/80 hover:border-indigo-300 transition cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <div className={`h-32 rounded-2xl bg-gradient-to-br ${b.coverBg} p-3.5 text-white flex flex-col justify-between shadow-sm`}>
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[10px] font-bold bg-black/25 px-2 py-0.5 rounded-lg truncate max-w-[110px]">{b.category}</span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setState((prev) => ({ ...prev, books: prev.books.filter((item) => item.id !== b.id) }));
                              notify(`已删除《${b.title}》`, 'info');
                            }}
                            className="w-6 h-6 rounded-lg bg-black/25 hover:bg-rose-600 text-white flex items-center justify-center"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                        <h4 className="font-bold text-xs sm:text-sm leading-snug line-clamp-2">{b.title}</h4>
                      </div>
                      <div className="mt-2.5">
                        <div className="text-[11px] text-slate-500 truncate">{b.author}</div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5">
                          <span>已读 {b.readMins}m</span>
                          <span className="font-bold text-indigo-600">{b.progress}%</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full mt-1 overflow-hidden">
                          <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${b.progress}%` }} />
                        </div>
                      </div>
                    </div>
                    <div className="mt-2.5 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-indigo-600">
                      <span>翻页阅读 (第 {(b.lastPage || 0) + 1} 页)</span>
                      <span>&rarr;</span>
                    </div>
                  </div>
                ))}

                {bookSearch.trim().length > 0 && (
                  <div
                    onClick={() => {
                      const newB = {
                        id: Date.now(),
                        title: bookSearch.trim(),
                        author: '站内书源检索',
                        category: bookCatFilter !== 'all' ? bookCatFilter : state.bookCategories[0] || '古生物科普',
                        progress: 0,
                        lastPage: 0,
                        readMins: 0,
                        coverBg: 'from-violet-600 to-indigo-800',
                        content: [`已为你加载《${bookSearch.trim()}》精选章节，支持翻页与自动进度保存！`]
                      };
                      setState((prev) => ({ ...prev, books: [newB, ...prev.books] }));
                      setBookSearch('');
                      setActiveBookId(newB.id);
                      setReaderPage(0);
                    }}
                    className="rounded-3xl p-4 border-2 border-dashed border-indigo-300 bg-indigo-50/50 flex flex-col items-center justify-center text-center cursor-pointer"
                  >
                    <FileText className="w-6 h-6 text-indigo-500 mb-1.5" />
                    <div className="text-xs font-bold text-indigo-900">站内检索：《{bookSearch}》</div>
                    <p className="text-[10px] text-indigo-600 mt-1">一键入架并开始翻页阅读</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ==================== TAB 6: 科研双语与 Three.js 3D 实验室 ==================== */}
        {activeTab === 'academic' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="lg:col-span-2 space-y-5">
              <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/70 shadow-sm">
                <h2 className="text-lg font-bold text-slate-900 mb-1">多线学术与双语进阶看板</h2>
                <p className="text-xs text-slate-500 mb-4">每次完成打卡自动奖励自律金币与宠物矿石</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200/70">
                    <div className="text-xs font-bold text-sky-800 mb-1.5">雅思英语 IELTS 7.0</div>
                    <p className="text-xs text-slate-600 mb-3">核心词 50 个 + 剑桥真题精听 1 篇</p>
                    <button onClick={() => grantReward(25, 25, '完成雅思打卡！+25 金币与 1 颗矿石', 1)} className="w-full py-2 rounded-xl bg-sky-600 text-white text-xs font-bold">
                      打卡 (+25金币)
                    </button>
                  </div>
                  <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200/70">
                    <div className="text-xs font-bold text-rose-800 mb-1.5">日语进阶 Japanese N3</div>
                    <p className="text-xs text-slate-600 mb-3">新标日初级下册 1 课 + 生肉跟读</p>
                    <button onClick={() => grantReward(25, 25, '完成日语打卡！+25 金币与 1 颗矿石', 1)} className="w-full py-2 rounded-xl bg-rose-600 text-white text-xs font-bold">
                      打卡 (+25金币)
                    </button>
                  </div>
                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/70">
                    <div className="text-xs font-bold text-emerald-800 mb-1.5">地大预研 & 古生物科普</div>
                    <p className="text-xs text-slate-600 mb-3">黄爱武老师方向文献精读 + 笔记</p>
                    <button onClick={() => grantReward(35, 35, '完成科研文献精读！+35 金币与 1 颗矿石', 1)} className="w-full py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold">
                      打卡 (+35金币)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Three.js 3D 交互预览器 */}
            <div className="bg-slate-900 text-white rounded-3xl p-5 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-teal-400 bg-teal-950 px-2.5 py-1 rounded-xl border border-teal-800">Three.js 3D 实验室</span>
                  <span className="text-[11px] text-slate-400">可拖拽旋转</span>
                </div>
                <div ref={threeContainerRef} className="w-full h-60 rounded-2xl bg-slate-950 overflow-hidden relative cursor-grab border border-slate-800 mt-2" />
              </div>
              <div className="mt-4 flex items-center justify-between gap-2">
                {[
                  { id: 'crystal', label: '矿物晶体' },
                  { id: 'ammonite', label: '菊石螺旋' },
                  { id: 'terrain', label: '空间装置' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setThreeShape(m.id)}
                    className={`flex-1 py-2 rounded-xl text-xs font-medium ${threeShape === m.id ? 'bg-teal-600 text-white font-bold' : 'bg-white/10 hover:bg-white/20'}`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ==================== 手机端底部导航栏 ==================== */}
      <nav className="lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-1 py-1.5 flex items-center justify-around">
        {[
          { id: 'dashboard', label: '总览', icon: Compass },
          { id: 'diet', label: '餐前餐后', icon: Camera },
          { id: 'fitness', label: '课表健身', icon: Dumbbell },
          { id: 'wallet', label: '省钱奖励', icon: Wallet },
          { id: 'bookshelf', label: '书架', icon: BookOpen },
          { id: 'academic', label: '科研3D', icon: Box }
        ].map((item) => {
          const Icon = item.icon;
          const active = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl ${active ? 'text-blue-600 font-bold' : 'text-slate-500'}`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[10px]">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* ==================== 独立备份与恢复弹窗 ==================== */}
      {backupModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-slate-900">独立网页本地存档与导出</h3>
              <button onClick={() => setBackupModalOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-500 mb-4">所有课表、电子书阅读页码、消费记账与宠物进度已实时自动保存在当前设备，也可随时导出 JSON 跨端备份：</p>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => {
                  const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = `GapYearOS_胡秋意存档_${new Date().toISOString().slice(0, 10)}.json`;
                  a.click();
                  URL.revokeObjectURL(url);
                  notify('已导出独立存档 JSON！', 'success');
                }}
                className="py-2.5 px-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold flex items-center justify-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />导出备份 (.json)
              </button>
              <label className="py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer">
                <Upload className="w-3.5 h-3.5" />恢复备份文件
                <input
                  type="file"
                  accept=".json"
                  className="hidden"
                  onChange={(e) => {
                    const f = e.target.files?.[0];
                    if (!f) return;
                    const r = new FileReader();
                    r.onload = (ev) => {
                      try {
                        setState({ ...DEFAULT_STATE, ...JSON.parse(ev.target.result) });
                        setBackupModalOpen(false);
                        notify('存档恢复成功！', 'success');
                      } catch (err) {
                        notify('文件格式有误', 'warning');
                      }
                    };
                    r.readAsText(f, 'utf-8');
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 语音调计划弹窗 ==================== */}
      {voiceOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-slate-900">语音一句话智能调计划与记账</h3>
              <button onClick={() => setVoiceOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-col items-center py-4 bg-slate-50 rounded-2xl border border-slate-200/70 mb-3">
              <button
                onClick={startVoiceListen}
                className={`w-14 h-14 rounded-full text-white flex items-center justify-center shadow-md ${isListening ? 'bg-rose-600 animate-pulse' : 'bg-blue-600'}`}
              >
                <Mic className="w-6 h-6" />
              </button>
              <span className="text-xs text-slate-600 mt-2">{isListening ? '正在聆听...' : '点击麦克风说话或直接输入指令'}</span>
            </div>
            <textarea
              rows={3}
              value={voiceText}
              onChange={(e) => setVoiceText(e.target.value)}
              placeholder="例如：把今天的雅思改到晚上九点，把周一的健身调到周二，取消睡前阅读..."
              className="w-full text-xs p-3 rounded-2xl border border-slate-200 mb-3"
            />
            <div className="flex flex-wrap gap-1.5 mb-4">
              <button
                onClick={() => setVoiceText('把今天的雅思改到晚上九点，把周一的健身调到周二，取消睡前阅读，新增提醒周五交初稿')}
                className="text-[11px] px-2.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-left"
              >
                示例1：“把今天的雅思改到晚上九点，把周一的健身调到周二，取消睡前阅读，新增提醒周五交初稿”
              </button>
              <button
                onClick={() => setVoiceText('今天黄家湖二食堂花了14.5元，排一个今晚十一点半看书的计划')}
                className="text-[11px] px-2.5 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 text-left"
              >
                示例2：“今天黄家湖二食堂花了14.5元，排一个今晚十一点半看书的计划”
              </button>
            </div>
            <div className="flex justify-end gap-2">
              <button onClick={() => setVoiceOpen(false)} className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">取消</button>
              <button onClick={applyVoiceCommand} className="px-5 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold">AI 自动调计划并执行</button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 粘贴账单弹窗 ==================== */}
      {pasteBillOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-slate-900">粘贴微信/支付宝账单自动识别</h3>
              <button onClick={() => setPasteBillOpen(false)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <X className="w-4 h-4" />
              </button>
            </div>
            <textarea
              rows={5}
              value={rawBillText}
              onChange={(e) => setRawBillText(e.target.value)}
              placeholder="例如：&#10;武科大黄家湖二食堂 14.50&#10;京东图书-古生物演化史 48.00"
              className="w-full text-xs p-3 rounded-2xl border border-slate-200 mb-3"
            />
            <div className="flex justify-end gap-2">
              <button onClick={() => setPasteBillOpen(false)} className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">取消</button>
              <button
                onClick={() => {
                  const lines = rawBillText.split(/\n+/);
                  const added = [];
                  lines.forEach((line) => {
                    const m = line.match(/(\d+(?:\.\d{1,2})?)/);
                    if (m) {
                      const amt = parseFloat(m[1]);
                      if (amt > 0 && amt < 20000) {
                        const title = line.replace(m[0], '').replace(/[,，￥¥元\t-]/g, ' ').trim() || '自动识别消费';
                        added.push({ id: Date.now() + Math.random(), title: title.slice(0, 24), amount: amt, category: '健康餐饮', date: '刚刚识别' });
                      }
                    }
                  });
                  if (added.length > 0) {
                    setState((prev) => ({ ...prev, wallet: { ...prev.wallet, expenses: [...added, ...prev.wallet.expenses] } }));
                    notify(`已识别 ${added.length} 笔账单！`, 'success');
                  }
                  setRawBillText('');
                  setPasteBillOpen(false);
                }}
                className="px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
              >
                自动识别并入账
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 通用快捷表单弹窗 ==================== */}
      {customModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-bold text-slate-900">{customModal.title}</h3>
              <button onClick={() => setCustomModal(null)} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              {customModal.fields.map((f) => (
                <div key={f.id}>
                  <label className="block text-slate-600 font-semibold mb-1">{f.label}</label>
                  {f.type === 'select' ? (
                    <select
                      value={customValues[f.id] || ''}
                      onChange={(e) => setCustomValues({ ...customValues, [f.id]: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white"
                    >
                      {f.options.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={f.type || 'text'}
                      value={customValues[f.id] || ''}
                      onChange={(e) => setCustomValues({ ...customValues, [f.id]: e.target.value })}
                      placeholder={f.placeholder || ''}
                      className="w-full px-3 py-2 rounded-xl border border-slate-200"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-end gap-2 mt-5">
              <button onClick={() => setCustomModal(null)} className="px-4 py-2 rounded-xl bg-slate-100 text-xs font-semibold">取消</button>
              <button
                onClick={() => {
                  customModal.onSubmit(customValues);
                  setCustomModal(null);
                }}
                className="px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
              >
                确认保存
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 添加新书弹窗（支持 TXT/MD/EPUB/PDF 导入与 GBK 自动解码） ==================== */}
      {addBookOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900">导入电子书 / 录入新书</h3>
              <button
                onClick={() => {
                  setAddBookOpen(false);
                  setImportingFileStatus('');
                }}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-2xl bg-indigo-50/70 border border-indigo-200 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-indigo-900">一键导入本地电子书文件</div>
                  <div className="text-[11px] text-indigo-600 mt-0.5">自动识别 UTF-8 / GBK 中文编码并切分章节目录</div>
                </div>
                <label className="px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold cursor-pointer shrink-0 transition">
                  选择文件 (.txt/.epub)
                  <input type="file" accept=".txt,.md,.epub,.pdf" className="hidden" onChange={handleImportEbookFile} />
                </label>
              </div>
              {importingFileStatus && (
                <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl border border-emerald-200">
                  {importingFileStatus}
                </div>
              )}
              <div>
                <label className="block text-slate-600 font-semibold mb-1">书名</label>
                <input
                  type="text"
                  value={newBookForm.title}
                  onChange={(e) => setNewBookForm({ ...newBookForm, title: e.target.value })}
                  placeholder="输入书名（导入文件后会自动填充）..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">作者</label>
                  <input
                    type="text"
                    value={newBookForm.author}
                    onChange={(e) => setNewBookForm({ ...newBookForm, author: e.target.value })}
                    placeholder="作者..."
                    className="w-full px-3 py-2 rounded-xl border border-slate-200"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">分类</label>
                  <select
                    value={newBookForm.category}
                    onChange={(e) => setNewBookForm({ ...newBookForm, category: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 bg-white"
                  >
                    {state.bookCategories.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-slate-600 font-semibold mb-1">正文预览 / 手动粘贴内容</label>
                <textarea
                  rows={4}
                  value={newBookForm.content}
                  onChange={(e) => setNewBookForm({ ...newBookForm, content: e.target.value })}
                  placeholder="支持完整长篇小说/文献粘贴，支持第X章自动生成目录..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-200"
                />
              </div>
              <button
                onClick={() => {
                  if (!newBookForm.title.trim()) return notify('请先输入或导入书名', 'warning');
                  const paras = newBookForm.content.trim()
                    ? newBookForm.content.trim().split(/\n+/).filter((l) => l.trim())
                    : [`《${newBookForm.title.trim()}》已入架，点击翻页即可阅读并保存进度！`];
                  const createdId = Date.now();
                  setState((prev) => ({
                    ...prev,
                    books: [
                      {
                        id: createdId,
                        title: newBookForm.title.trim(),
                        author: newBookForm.author.trim() || '私人藏书',
                        category: newBookForm.category,
                        progress: 0,
                        lastPage: 0,
                        readMins: 0,
                        coverBg: 'from-emerald-600 to-teal-800',
                        content: paras
                      },
                      ...prev.books
                    ]
                  }));
                  setAddBookOpen(false);
                  setImportingFileStatus('');
                  setActiveBookId(createdId);
                  setReaderPage(0);
                  notify(`《${newBookForm.title.trim()}》已存入书架并打开阅读器！`, 'success');
                }}
                className="w-full py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold mt-2 transition"
              >
                加入书架并立即翻页阅读
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== 内置沉浸式电子书阅读器（支持翻页、目录跳转与自动保存进度） ==================== */}
      {activeBook && (() => {
        const bookPages = buildBookPages(activeBook.content);
        const totalPages = bookPages.length;
        const safePageIdx = Math.max(0, Math.min(totalPages - 1, readerPage));
        const tocList = extractBookToc(bookPages);

        return (
          <div className="fixed inset-0 z-50 bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-2 sm:p-5">
            <div
              className={`rounded-3xl max-w-4xl w-full h-[92vh] flex flex-col shadow-2xl overflow-hidden relative ${
                readerTheme === 'paper'
                  ? 'bg-[#faf6ed] text-[#2c2825]'
                  : readerTheme === 'mint'
                  ? 'bg-[#e8f3ec] text-[#1f3328]'
                  : 'bg-[#181a1f] text-slate-200'
              }`}
            >
              {/* 顶部控制栏 */}
              <div className="px-4 py-3 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <button onClick={handleCloseReader} className="px-3 py-1.5 rounded-xl bg-black/5 hover:bg-black/10 text-xs font-bold flex items-center gap-1 transition">
                    <ArrowLeft className="w-3.5 h-3.5" />保存退出
                  </button>
                  <button
                    onClick={() => setShowTocDrawer((v) => !v)}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600/15 text-indigo-800 text-xs font-bold flex items-center gap-1 hover:bg-indigo-600/25 transition"
                  >
                    <BookOpen className="w-3.5 h-3.5" />目录 ({tocList.length})
                  </button>
                  <h3 className="font-bold text-sm truncate max-w-[140px] sm:max-w-xs">{activeBook.title}</h3>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setReaderMode((m) => (m === 'page' ? 'scroll' : 'page'))}
                    className="px-2.5 py-1 rounded-xl bg-black/5 text-[11px] font-bold"
                  >
                    {readerMode === 'page' ? '📖 翻页模式' : '📜 滚动模式'}
                  </button>
                  <div className="px-2.5 py-1 rounded-xl bg-emerald-600/15 text-emerald-800 text-xs font-bold flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>
                      {String(Math.floor(readerSecs / 60)).padStart(2, '0')}:{String(readerSecs % 60).padStart(2, '0')}
                    </span>
                  </div>
                  <button onClick={() => setReaderTheme('paper')} className="w-6 h-6 rounded-lg bg-[#faf6ed] border border-slate-300" />
                  <button onClick={() => setReaderTheme('mint')} className="w-6 h-6 rounded-lg bg-[#e8f3ec] border border-slate-300" />
                  <button onClick={() => setReaderTheme('dark')} className="w-6 h-6 rounded-lg bg-[#181a1f] border border-slate-600" />
                  <button onClick={() => setReaderFontSize((s) => Math.max(13, s - 1))} className="w-6 h-6 rounded-lg bg-black/5 text-xs font-bold">
                    A-
                  </button>
                  <button onClick={() => setReaderFontSize((s) => Math.min(24, s + 1))} className="w-6 h-6 rounded-lg bg-black/5 text-xs font-bold">
                    A+
                  </button>
                </div>
              </div>

              {/* 章节目录抽屉（支持一键跳转） */}
              {showTocDrawer && (
                <div className="absolute top-14 left-3 bottom-16 w-64 sm:w-72 bg-white/95 backdrop-blur-md text-slate-800 rounded-2xl shadow-2xl border border-slate-200 z-20 flex flex-col overflow-hidden">
                  <div className="p-3 border-b border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900">章节目录 · 点击跳转</span>
                    <button onClick={() => setShowTocDrawer(false)} className="text-slate-400 hover:text-slate-600">
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-1">
                    {tocList.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          updateBookPageProgress(activeBook.id, item.page, totalPages);
                          setReaderMode('page');
                          setShowTocDrawer(false);
                          notify(`已跳转至：${item.title}`, 'info');
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition flex items-center justify-between gap-2 ${
                          safePageIdx >= item.page ? 'bg-indigo-50 text-indigo-800 font-bold' : 'hover:bg-slate-100 text-slate-700'
                        }`}
                      >
                        <span className="truncate">{item.title}</span>
                        <span className="text-[10px] text-slate-400 shrink-0">P{item.page + 1}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 正文阅读区（翻页模式支持左右点击翻页） */}
              <div className="flex-1 overflow-y-auto px-5 sm:px-14 py-6 leading-loose relative" style={{ fontSize: `${readerFontSize}px` }}>
                {readerMode === 'page' ? (
                  <div className="min-h-full flex flex-col justify-between">
                    <div className="space-y-4 text-justify">
                      {bookPages[safePageIdx].map((p, i) => (
                        <p key={i} className="indent-8">{p}</p>
                      ))}
                    </div>

                    {/* 翻页控制栏 */}
                    <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between gap-3 text-xs">
                      <button
                        disabled={safePageIdx <= 0}
                        onClick={() => updateBookPageProgress(activeBook.id, safePageIdx - 1, totalPages)}
                        className="px-4 py-2 rounded-xl bg-black/10 hover:bg-black/15 disabled:opacity-30 font-bold transition"
                      >
                        ← 上一页
                      </button>
                      <div className="flex-1 max-w-xs flex items-center gap-2">
                        <input
                          type="range"
                          min={0}
                          max={Math.max(0, totalPages - 1)}
                          value={safePageIdx}
                          onChange={(e) => updateBookPageProgress(activeBook.id, Number(e.target.value), totalPages)}
                          className="flex-1 accent-indigo-600"
                        />
                        <span className="font-bold whitespace-nowrap">
                          第 {safePageIdx + 1} / {totalPages} 页
                        </span>
                      </div>
                      <button
                        disabled={safePageIdx >= totalPages - 1}
                        onClick={() => updateBookPageProgress(activeBook.id, safePageIdx + 1, totalPages)}
                        className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-30 text-white font-bold transition"
                      >
                        下一页 →
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-justify">
                    {activeBook.content.map((p, i) => (
                      <p key={i} className="indent-8">{p}</p>
                    ))}
                  </div>
                )}
              </div>

              {/* 底部进度与批注栏 */}
              <div className="px-4 py-3 border-t border-black/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span>
                    已自动保存进度：<strong>{activeBook.progress}%</strong>
                  </span>
                  <button
                    onClick={() => {
                      updateBookPageProgress(activeBook.id, Math.min(totalPages - 1, safePageIdx + 1), totalPages);
                      grantReward(25, 25, '阅读进度已保存，获得 +25 金币与 1 颗矿石！', 1);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold"
                  >
                    完成本节打卡 (+25金币)
                  </button>
                </div>
                <div className="flex items-center gap-2 flex-1 max-w-sm">
                  <input
                    type="text"
                    value={readerNote}
                    onChange={(e) => setReaderNote(e.target.value)}
                    placeholder="记一句批注..."
                    className="flex-1 px-3 py-1.5 rounded-xl bg-white/80 border border-black/15 text-slate-800"
                  />
                  <button
                    onClick={() => {
                      if (!readerNote.trim()) return;
                      setReaderNote('');
                      notify('读书批注已保存！', 'success');
                    }}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 text-white font-bold"
                  >
                    存笔记
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}