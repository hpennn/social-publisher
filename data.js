// 内容数据库 - 每日8:30自动更新
// 每个campaign包含: 文案(直接发布)、配图(生成图片)、视频(即梦脚本)

var CAMPAIGNS = [
  {
    id: '20260714_ai-staff',
    project: 'AI智能员工',
    url: 'https://www.zhinenti.cn',
    date: '2026-07-14',
    texts: [
      {
        id: '20260714_ai-staff_xhs',
        platform: 'xiaohongshu',
        platformName: '小红书',
        title: '打工人副业神器！这个AI员工帮我24小时赚钱 💰',
        content: '🔥 发现一个宝藏工具——AI智能员工！\n\n它可以：\n✅ 自动写文案、做PPT、处理文档\n✅ 24小时在线接单，帮你完成各种工作\n✅ 支持自定义工作流，像雇了一个真人助手\n\n我靠它接了好几单文案撰写，月入多了3000+ 💰\n\n最关键：注册就能用，零门槛！\n\n👉 www.zhinenti.cn\n\n#AI工具 #副业赚钱 #效率神器 #打工人必备 #AI智能员工'
      },
      {
        id: '20260714_ai-staff_zhihu',
        platform: 'zhihu',
        platformName: '知乎',
        title: '有没有什么工具可以让小团队自动化运营？',
        content: '推荐一个我正在用的工具：**AI智能员工**（www.zhinenti.cn）\n\n它本质上是一个AI Agent平台，但做了一些很实用的封装：\n\n1. **自动化工作流**：可以设置定时任务，比如每天早上自动抓取行业数据、生成日报\n2. **多模态能力**：不只是文字，还能做PPT、处理文档、生成图片\n3. **API集成**：可以对接各种第三方服务\n\n我用它搭了3个自动化流程：\n- 每日竞品监控 → 自动生成分析报告\n- 客户咨询 → AI预处理 + 人工复核\n- 内容创作 → 自动生成初稿 → 一键发布\n\n小团队用这个，至少省2个人力成本。\n\n免费试用地址：www.zhinenti.cn'
      }
    ],
    images: [
      {
        id: '20260714_ai-staff_img1',
        title: '小红书封面 - AI帮你赚钱',
        prompt: '现代简约风格的手机屏幕展示AI助手对话界面，屏幕上方飘浮金币和增长图表，背景使用柔和的紫色到蓝色渐变，画面干净有科技感，顶部标题文字"AI帮你赚钱"，底部小字"副业神器"，16:9比例',
        image: 'images/20260714_aistaff.jpg'
      }
    ],
    videos: [
      {
        id: '20260714_ai-staff_video1',
        title: '15秒短视频脚本 - 打工人逆袭',
        platform: '即梦',
        platformUrl: 'https://jimeng.jianying.com/',
        script: '【场景1】深夜办公室，一个年轻人对着堆积如山的文件发愁，桌上时钟显示凌晨2点，画面色调偏暗偏冷\n\n【场景2】年轻人打开笔记本电脑，屏幕上出现"AI智能员工"界面，画面开始变亮\n\n【场景3】屏幕上AI助手快速生成文档、PPT、分析报告，画面节奏明快，充满科技感\n\n【场景4】年轻人轻松躺在椅子上喝咖啡，手机不断弹出"收入+50""收入+100"的通知，画面明亮温暖\n\n【结尾】屏幕出现"AI智能员工"字样和网址 www.zhinenti.cn，背景是金色光效\n\n旁白："加班不如加个AI助手，让AI替你24小时打工。AI智能员工，注册就能用。"\n\n风格：现代都市，科技感，节奏紧凑，转场流畅'
      }
    ]
  },
  {
    id: '20260714_doc-convert',
    project: '文档转换工具',
    url: 'https://convert.hpenn.xyz',
    date: '2026-07-14',
    texts: [
      {
        id: '20260714_doc-convert_xhs',
        platform: 'xiaohongshu',
        platformName: '小红书',
        title: '学生党必存！PDF转Word居然可以这么好用 📄✨',
        content: '期末复习整理资料，发现一堆PDF没法编辑？🤯\n\n试试这个免费的文档转换工具 👇\n\n📌 PDF → Word：格式完美保留，表格、公式、图片一个不乱\n📌 Word → PDF：一键转换，排版不变\n📌 还支持 Excel、PPT、图片等格式互转\n\n最绝的是👉 扫描版PDF也能识别文字！OCR识别率超高\n\n我毕业论文改了10版全靠它 😭\n\n👉 convert.hpenn.xyz\n\n#学生党必备 #PDF转换 #免费工具 #毕业论文 #文档处理'
      },
      {
        id: '20260714_doc-convert_douyin',
        platform: 'douyin',
        platformName: '抖音/短视频',
        title: '3秒搞定文档转换',
        content: '你还在花钱买PDF转换会员？\n\n这个免费工具直接搞定 👇\n\nPDF转Word ✅ 格式不乱\nWord转PDF ✅ 一键完成\n扫描件识别 ✅ 文字秒出\n批量处理 ✅ 效率翻倍\n\nconvert.hpenn.xyz\n\n学生党、打工人必备！先收藏 ⭐'
      }
    ],
    images: [
      {
        id: '20260714_doc-convert_img1',
        title: '小红书封面 - 文档转换',
        prompt: '清新的蓝白色调插画风格，一个学生开心地坐在书桌前，桌上放着笔记本电脑，屏幕显示文档转换界面，周围飘浮着PDF、Word、Excel文件图标和转换箭头，背景是简洁的书架，顶部标题文字"PDF转Word神器"，16:9比例',
        image: 'images/20260714_docconvert.jpg'
      }
    ],
    videos: [
      {
        id: '20260714_doc-convert_video1',
        title: '15秒短视频脚本 - 文档转换神器',
        platform: '即梦',
        platformUrl: 'https://jimeng.jianying.com/',
        script: '【场景1】桌面上堆满了打印的PDF文件，一只手翻找着其中一页，旁边放着红色笔做标记，画面略显凌乱\n\n【场景2】手拿起一份PDF文件，通过一个发光的"转换通道"，通道是蓝色科技风格的光束\n\n【场景3】文件从通道另一端出来，变成了可编辑的Word文档，光标在文档中自由移动编辑文字，画面明亮清晰\n\n【场景4】多个文件同时飞入转换通道，瞬间全部完成转换，展现批量处理能力\n\n【结尾】屏幕中央出现"免费文档转换"字样和网址 convert.hpenn.xyz，简洁白色背景\n\n旁白："PDF转Word，格式不乱，免费使用，批量处理。convert.hpenn.xyz，你的文档转换神器。"\n\n风格：清新明亮，节奏快速，转场丝滑，科技感与实用感并存'
      }
    ]
  }
];

// 平台跳转配置
var PLATFORMS = {
  xiaohongshu: { name: '小红书', icon: '📕', color: '#FF2442', url: 'https://creator.xiaohongshu.com/publish/publish' },
  zhihu: { name: '知乎', icon: '📘', color: '#0066FF', url: 'https://www.zhihu.com/creator' },
  douyin: { name: '抖音', icon: '🎵', color: '#111', url: 'https://creator.douyin.com/creator-micro/content/upload' },
  wechat: { name: '公众号', icon: '💬', color: '#07C160', url: 'https://mp.weixin.qq.com/' },
  bilibili: { name: 'B站', icon: '📺', color: '#FB7299', url: 'https://member.bilibili.com/platform/upload/text' },
  weibo: { name: '微博', icon: '📢', color: '#E6162D', url: 'https://weibo.com' }
};
