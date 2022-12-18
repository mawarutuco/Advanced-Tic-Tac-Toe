let words = [
  "滑鼠",
  "冰箱",
  "狗",
  "牛奶",
  "酪梨",
  "歐洲",
  "分配",
  "突然",
  "積累",
  "證實",
  "短暫",
  "永恆",
  "技術",
  "問答",
  "徵才",
  "聊天室",
  "應用",
  "能力",
  "條理",
  "強制",
  "奉獻",
  "證明",
  "歧視",
  "懷疑",
  "誇大",
  "異常",
  "害怕",
  "產生",
  "全球",
  "引導",
  "有害",
  "屈辱",
  "憎恨",
  "偽造",
  "立即",
  "阻礙",
  "合理",
  "保存",
  "智力",
  "短暫",
  "相互",
  "善於觀察",
  "正常",
  "長久",
  "肺炎",
  "措施",
  "完全",
  "調解",
  "排練",
  "不滿",
  "正直",
  "次要",
  "明智",
  "短缺",
  "堅固",
  "門檻",
  "想像",
  "筋疲力竭",
  "熱忱",
  "八月",
  "黑色",
  "露營",
  "黑板",
  "秋天",
  "毯子",
  "蠟燭",
  "遠離",
  "糖果",
  "嬰兒",
  "街區",
  "背後",
  "車子",
  "卡片",
  "羽毛球",
  "關心",
  "袋子",
  "仔細",
  "女演",
  "烘烤",
  "攜帶",
  "害怕",
  "麵包店",
  "情形",
  "陽台",
  "城堡",
  "貓",
  "香蕉",
  "無聊",
  "趕上",
  "樂團",
  "慶祝",
  "銀行",
  "手機",
  "烤肉",
  "棒球",
  "兩者",
  "中心",
  "籃子",
  "公分",
  "籃球",
  "椅子",
  "蝙蝠",
  "粉筆",
  "洗澡",
  "機會",
  "浴室",
  "零錢",
  "便宜",
  "海灘",
  "欺騙",
  "檢查",
  "歡呼",
  "美麗",
  "橋",
  "乳酪",
  "接受",
  "橫過",
  "行動",
  "活躍",
  "地址",
  "勸告",
  "事情",
  "違反",
  "航線",
  "允許",
  "單獨",
  "合計",
  "憤怒",
  "任何",
  "地區",
  "爭論",
  "藝術",
  "睡覺",
  "助手",
  "攻擊",
  "聽眾",
  "喚醒",
  "意識",
  "銀行",
  "吃烤",
  "啤酒",
  "初學者",
  "信任",
  "長凳",
  "較好",
  "帳單",
  "沸騰",
  "樹枝",
  "勇敢",
  "摘要",
  "寬",
  "廣播",
  "水桶",
  "平靜",
  "蠟燭",
  "上尉",
  "地毯",
  "胡蘿",
  "城堡",
  "天花",
  "中央",
  "首領",
  "選擇",
  "傑作",
  "店員",
  "聰明",
  "硬幣",
  "大學",
  "梳子",
  "公司",
  "比較",
  "完全",
  "關心",
  "證實",
  "衝突",
  "慶祝",
  "認為",
  "包含",
  "繼續",
  "控制",
  "談論",
  "穀物",
  "棉花",
  "咳嗽",
  "農民",
  "縣市",
  "夫妻",
  "勇氣",
  "課程",
  "有色",
  "奶油",
  "危機",
  "群眾",
  "殘酷",
  "治癒",
  "好奇",
  "水流",
  "窗簾",
  "顧客",
  "聾的",
  "債務",
  "決定",
  "深淺",
  "鹿角",
  "程度",
  "民主",
  "否認",
  "依靠",
  "形容",
  "沙漠",
  "設計",
  "願望",
  "發展",
  "鑽石",
  "日記",
  "通常",
  "恐龍",
  "外交官",
  "方向",
  "發現",
  "距離",
  "分開",
  "公文",
  "畫畫",
  "鴨子",
  "賺得",
  "教育",
  "有效",
  "年齡",
  "選舉",
  "要素",
  "敵人",
  "精力",
  "工程師",
  "入口",
  "信封",
  "羡慕",
  "事件",
  "存在",
  "出口",
  "預料",
  "解釋",
  "額外",
  "失敗",
  "公平",
  "奇特",
  "幻想",
  "過失",
  "害怕",
  "羽毛",
  "柵欄",
  "發燒",
  "作戰",
  "電影",
  "最後",
  "蠢人",
  "愚蠢",
  "足球",
  "強迫",
  "森林",
  "向前",
  "狐狸",
  "法國",
  "友情",
  "煎蛋",
  "車庫",
  "大門",
  "聚集",
  "一般",
  "和藹",
  "先生",
  "德國",
  "進入",
  "手套",
  "球門",
  "神明",
  "金條",
  "盛大",
  "葡萄",
  "問候",
  "看守",
  "客人",
  "嚮導",
  "槍",
  "理髮",
  "大廳",
  "簡直",
  "母雞",
  "英雄",
  "遠足",
  "雇傭",
  "家務",
  "人的",
  "饑餓",
  "有病",
  "改善",
  "英寸",
  "包括",
  "工業",
  "墨水",
  "三國演義",
  "介紹",
  "邀請",
  "鐵礦",
  "日本",
  "甕",
  "笑話",
  "小路",
  "燈籠",
  "姓氏",
  "法律",
  "提拉米蘇",
  "場所",
  "許多",
  "可愛",
  "午餐",
  "發病",
  "雜誌",
  "主要",
  "管理",
  "結婚",
  "眾多",
  "意義",
  "成員",
  "記憶",
  "訊息",
  "方法",
  "午夜",
  "模型",
  "拖把",
  "運動",
  "釘子",
  "狹窄",
  "國家",
  "自然",
  "幾乎",
  "必要",
  "領帶",
  "神經",
  "報紙",
  "英俊",
  "喧鬧",
  "沒有",
  "麵條",
  "堅果",
  "順從",
  "職業",
  "自己",
  "運轉",
  "意見",
  "一般",
  "組織",
  "疼痛",
  "蒼白",
  "平底",
  "原諒",
  "乘客",
  "忍耐",
  "和平",
  "梨子",
  "完美",
  "個人",
  "相片",
  "一堆",
  "大頭",
  "乒乓",
  "管子",
  "平原",
  "植物",
  "盤子",
  "高興",
  "詩",
  "水池",
  "港口",
  "位置",
  "罐頭",
  "權力",
  "稱讚",
  "珍貴",
  "總統",
  "印刷",
  "印表",
  "囚犯",
  "大概",
  "生產",
  "產品",
  "前進",
  "允諾",
  "發音",
  "保護",
  "懲罰",
  "目的",
  "雨衣",
  "相當",
  "閱讀",
  "理由",
  "記錄",
  "反身",
  "拒絕",
  "遺憾",
  "提醒",
  "修理",
  "回答",
  "需要",
  "尊敬",
  "評論",
  "羅馬",
  "橡皮",
  "衝浪",
  "俄羅斯",
  "安全",
  "帆船",
  "舊金山",
  "沙漠",
  "滿意",
  "科學",
  "秘密",
  "秘書",
  "好像",
  "服務",
  "岸邊",
  "呼喊",
  "陣雨",
  "關(",
  "寂靜",
  "寂靜",
  "傻子",
  "溜冰",
  "滑雪",
  "技能",
  "靈巧",
  "困乏",
  "肥皂",
  "社會",
  "士兵",
  "說話",
  "精神",
  "肉體",
  "推開",
  "階段",
  "郵票",
  "蒸",
  "暴風",
  "直的",
  "成就",
  "突然",
  "晚餐",
  "支援",
  "海浪",
  "游泳",
  "餐具",
  "尾巴",
  "眼淚",
  "溫馨",
  "帳蓬",
  "學期",
  "可怕",
  "厚",
  "小偷",
  "直到",
  "東京",
  "舌頭",
  "牙痛",
  "蛋塔",
  "貿易",
  "交通",
  "運輸",
  "旅行",
  "信任",
  "獲取",
  "通過",
  "講解",
  "篇幅",
  "關於",
  "熱門",
  "社區",
  "下載",
  "猿猴",
  "電腦",
  "鐵板燒",
  "火鍋",
  "中藥",
  "椅子",
  "桌子",
  "黃色",
  "狼",
  "鼠",
  "狸",
  "哺乳類",
  "北極熊",
  "豹",
  "狐狸",
  "獅子",
  "獾",
  "老虎",
  "牛",
  "羚",
  "鹿",
  "象",
  "駱駝",
  "馬",
  "驢",
  "貝類",
  "善解人意",
  "心花怒放",
  "一毛不拔",
  "白馬非馬",
  "傾盆大雨",
  "筋疲力竭",
  "狐群狗黨",
  "一視同仁",
  "黃道吉日",
  "口是心非",
  "一刀兩斷",
  "一鳴驚人",
  "大驚小怪",
  "草菅人命",
  "自不量力",
  "一網打盡",
  "一乾二淨",
  "一箭雙鵰",
  "一步登天",
  "九死一生",
  "竭盡心力",
  "五十步笑百步",
  "郎才女貌",
  "足智多謀",
  "異口同聲",
  "愛不釋手",
  "後生可畏",
  "一落千丈",
  "風調雨順",
  "素昧平生",
  "誠心誠意",
  "舞文弄墨",
  "老馬識途",
  "一刀兩斷",
  "龍吟虎嘯",
  "拍案叫絕",
  "一盞茶時",
  "另眼相待",
  "名落孫山",
  "三頭六臂",
  "守口如瓶",
  "靈機一動",
  "貫徹始終",
  "大禍臨頭",
  "如日中天",
  "將計就計",
  "神態自若",
  "一摸ㄧ樣",
  "大禍臨頭",
  "單槍匹馬",
  "品頭論足",
  "槁木死灰",
  "廣土眾民",
  "事半功倍",
  "自始至終",
  "口是心非",
  "另臉相看",
  "力不從心",
  "同流合污",
  "官官相護",
  "一飛沖天",
  "反覆無常",
  "一針見血",
  "大禍臨頭",
  "驚濤駭浪",
  "不甘示弱",
  "騰雲駕霧",
  "前功盡棄",
  "綠草如茵",
  "明爭暗鬥",
  "厚此薄彼",
  "死心塌地",
  "金榜題名",
  "忍不可忍",
  "停雲落月",
  "再三再四",
  "出人頭地",
  "乳臭未乾",
  "百步穿楊",
  "談笑風生",
  "打家劫舍",
  "拔苗助長",
  "黃道吉日",
  "開門見山",
  "一毛不拔",
  "百尺竿頭",
  "慘不忍睹",
  "路不拾遺",
  "目不轉睛",
  "快馬加鞭",
  "食言而肥",
  "五花八門",
  "送往迎來",
  "成群結隊",
  "日文",
  "麵包",
  "棉被",
  "目標",
  "明白",
  "模板",
  "泡麵",
  "平台",
  "蘋果",
  "莫名其妙",
  "冒牌貨",
  "民間",
  "租客",
  "獒犬",
  "採取",
  "騙術",
  "庫存",
  "青菜",
  "濃縮",
  "參與",
  "女生",
  "釀酒",
  "苦頭",
  "檸檬",
  "檸檬水",
  "風吹草動",
  "湊巧",
  "天才",
  "排名",
  "平面",
  "拍賣",
  "泡沫",
  "引擎蓋",
  "青蛙王子",
  "泡菜",
  "鵝",
  "性格",
  "雙人",
  "生日",
  "燒肉",
  "收入",
  "使然",
  "恩人",
  "救命恩人",
  "惺惺相惜",
  "迅速",
  "餐券",
  "隔空",
  "高喊",
  "茅坑",
  "熱鬧",
  "全身",
  "審美",
  "價值觀",
  "搜尋",
  "氣勢如虹",
  "烤肉",
  "全勤",
  "逛街",
  "規格",
  "觀光區",
  "過去式",
  "開始",
  "親切",
  "全球性",
  "全球暖化",
  "競技場",
  "交界處",
  "趕車",
  "早餐店",
  "實況轉播",
  "數據庫",
  "睡眠",
  "品質",
  "拍照",
  "照相機",
  "韓劇",
  "日劇",
  "越南文",
  "印度",
  "鐵達尼號",
  "骨質疏鬆",
  "注意",
  "醫藥用品",
  "美劇",
  "連續劇",
  "阿凡達",
  "運動",
  "奧運",
  "冰上曲棍球",
  "羽絨大衣",
  "聖嬰現象",
  "衣櫥",
  "主管",
  "拒絕",
  "同意",
  "離婚協議書",
  "結婚證書",
  "畢業證書",
  "打卡",
  "遲到",
  "全勤",
  "下雨",
  "豪大雨",
  "兵乓",
  "滂沱大雨",
  "瀑布",
  "大海嘯",
  "明天過後",
  "孔子",
  "愛因斯坦",
  "耶穌",
  "成吉思汗",
  "米開朗基羅",
  "狼人殺",
  "梅林",
  "綠色",
  "彩虹",
  "記憶體",
  "海馬迴",
  "派大星",
  "蟒蛇",
  "世界末日",
  "濕紙巾",
  "廚房紙巾",
  "密碼",
  "興高采烈",
  "哭哭啼啼",
  "踩高蹺",
  "戴高帽",
  "狐狸精",
  "哥布林",
  "牛仔褲",
  "釘書機",
  "鉛筆盒",
  "米開朗基羅",
  "英國女王",
  "貝多芬",
];

export default words;
