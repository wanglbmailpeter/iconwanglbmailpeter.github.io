import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, Award, Calendar, AlertTriangle, 
  ArrowRight, X, ChevronRight, CheckCircle2, Lock
} from 'lucide-react';

const data = {
  title: "公司AI转型建设情况汇报",
  subtitle: "统一思想 · 夯实底座 · 落实应用 · 发挥成效",
  sections: [
    {
      id: "goals",
      title: "总体目标与建设蓝图",
      icon: <Target className="w-8 h-8 text-blue-400" />,
      color: "bg-blue-900/20 border-blue-500/30",
      iconBg: "bg-blue-500/10",
      summary: "从单点工具向企业级战略性解决方案转型，打造AI驱动的新型数字资产管理公司。",
      details: [
        {
          subtitle: "战略目标",
          items: [
            "不是简单的问答助手和单点效率工具",
            "打造企业级战略性解决方案",
            "企业机器人：AI智能体驱动业务全链路自动化运行与自主决策",
            "企业自动驾驶：实现新型资产管理业务全流程的智能化自主运转"
          ]
        },
        {
          subtitle: "建设蓝图 (三层架构)",
          items: [
            "基座：资金大模型 (自动驾驶底盘，提供基础模型、语料支撑)",
            "能力：业务支持中心组织智能体 (涵盖机构销售、财富管理等八大能力)",
            "角色：超级数字员工 (资产分析、客户服务、交易、研究等核心角色)"
          ]
        },
        {
          subtitle: "组织与考评转型",
          items: [
            "圆桌式架构：牌照打开、快速响应、协同作战、高效运转",
            "新型考评机制：员工一专多能、三位一体考核、业务能力平台化、总量规模化考核"
          ]
        }
      ]
    },
    {
      id: "achievements",
      title: "阶段性建设成果",
      icon: <Award className="w-8 h-8 text-amber-400" />,
      color: "bg-amber-900/20 border-amber-500/30",
      iconBg: "bg-amber-500/10",
      summary: "资金大模型及多业务智能体初见成效，基础设施与AI工作台基本成型。",
      details: [
        {
          subtitle: "资金大模型应用",
          items: [
            "核心能力：统一数据与预警、非结构化数据提取、异常识别与推送、自然语言交互",
            "关键场景：资金穿透分析、投资效益分析、风险预警监控"
          ]
        },
        {
          subtitle: "业务应用智能体",
          items: [
            "资管智能体：构建商机从识别到执行的统一作战体系",
            "FICC智能体(华小创)：打造“组织者+数字员工”共生体",
            "信用交易智能体：构建三层业务架构，打造信用业务智能中枢",
            "固收AI智能体：以债券配置为核心，实现部门内外双协同",
            "费控智能体(差旅)：全链路自动化闭环，累计集采管控1039.3万元"
          ]
        },
        {
          subtitle: "基础设施与平台",
          items: [
            "算力资源：生产环境6台(4台PPU+2台H20)，测试环境3台",
            "模型部署：主力模型28个，部署率80%+",
            "AI工作台：基础设施统一入口、多业务展业支持中心、智能组网操作界面"
          ]
        }
      ]
    },
    {
      id: "tasks",
      title: "重点任务与组织安排",
      icon: <Calendar className="w-8 h-8 text-emerald-400" />,
      color: "bg-emerald-900/20 border-emerald-500/30",
      iconBg: "bg-emerald-500/10",
      summary: "明确2026年四大重点任务，重塑团队与研发范式，强化协同调度。",
      details: [
        {
          subtitle: "2026重点任务与路径",
          items: [
            "四大任务：资金大模型升级、业务应用落地、基础设施完善、AI应用推广",
            "3.31节点：第一梯队完成核心功能建设",
            "6.30节点：第二梯队完成扩展功能建设",
            "下半年节点：推广使用，全面上线与迭代"
          ]
        },
        {
          subtitle: "组织安排",
          items: [
            "业务侧(团队重塑)：组建AI驱动型业务团队，引进跨界人才",
            "研发侧(范式转型)：从“AI辅助”到“新范式开发”，突破传统编码模式",
            "云信支撑(资源整合)：打造顶尖AI科学家与产品团队，建立标准化流程"
          ]
        },
        {
          subtitle: "协同机制",
          items: [
            "专项协调组：按周调度，解决卡点问题",
            "集中攻坚组：集中优势资源，突破技术瓶颈",
            "高效协同推进：小步快跑，定期观摩，经验复用"
          ]
        }
      ]
    },
    {
      id: "challenges",
      title: "当前挑战与工作建议",
      icon: <AlertTriangle className="w-8 h-8 text-rose-400" />,
      color: "bg-rose-900/20 border-rose-500/30",
      iconBg: "bg-rose-500/10",
      summary: "破除思维惯性，实施“断后路”式强制转型，筑牢全流程风控安全底线。",
      details: [
        {
          subtitle: "破除思维惯性",
          items: [
            "现状挑战：老办法依赖、隐性知识闭环缺失、认知偏差",
            "启动极客模式：抽调骨干成立全脱产攻坚小组",
            "实施工具禁令：实验区内全面禁用传统开发工具，强制使用AI Agent",
            "显性化工程：逼迫业务专家将隐性经验编写为标准Prompt和知识库"
          ]
        },
        {
          subtitle: "深化场景与组织优化",
          items: [
            "引入OpenClaw理念：对标“企业自动驾驶”，提升智能体自主处理能力",
            "高管牵头先行：建立“一把手”工程，各板块负责人每周参与推进会",
            "配套激励迭代：设立“AI转型专项奖”，加速培养“业务+AI”复合型人才"
          ]
        },
        {
          subtitle: "安全与建设要求",
          items: [
            "筑牢安全底线：构建“AI保护AI”的全流程风控体系（全流程护栏、动态风控）",
            "建设要求：人机协同、自然语言交互、高质量语料、灵活智能组网"
          ]
        }
      ]
    }
  ]
};

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedSection = data.sections.find(s => s.id === selectedId);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '377773') {
      setIsAuthenticated(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <AnimatePresence>
        {!isAuthenticated && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-[#0B1120]/90 backdrop-blur-xl flex items-center justify-center p-4 selection:bg-blue-500/30 overflow-hidden"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
              <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px]"></div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 w-full max-w-md bg-[#0f172a]/80 backdrop-blur-2xl p-8 rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-500/10 rounded-2xl border border-blue-500/20 shadow-inner">
                  <Lock className="w-8 h-8 text-blue-400" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white text-center mb-2 tracking-wide">访问受限</h2>
              <p className="text-slate-400 text-center mb-8 text-sm">请输入访问密码以查看公司AI转型建设情况汇报</p>
              
              <form onSubmit={handleLogin}>
                <div className="mb-6">
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(false);
                    }}
                    placeholder="请输入密码"
                    className={`w-full bg-black/40 border ${error ? 'border-rose-500/50 focus:border-rose-500' : 'border-white/10 focus:border-blue-500/50'} rounded-xl px-4 py-3 text-white placeholder-slate-500 outline-none transition-colors`}
                  />
                  {error && <p className="text-rose-400 text-sm mt-2 flex items-center"><AlertTriangle className="w-4 h-4 mr-1"/> 密码错误，请重试</p>}
                </div>
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-3 rounded-xl transition-colors shadow-lg shadow-blue-900/20"
                >
                  进入看板
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#0B1120] text-slate-200 p-4 md:p-8 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-900/20 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px]"></div>
      </div>

      <div className="max-w-[1920px] mx-auto w-full flex flex-col xl:flex-row gap-6 relative z-10 h-full">
        {/* Left Column: Content */}
        <div className="w-full xl:w-5/12 flex flex-col h-full">
          {/* Header */}
          <header className="mb-8 text-left pt-2">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                {data.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-sm md:text-base text-blue-300/80 font-medium tracking-widest">
                <span>统一思想</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                <span>夯实底座</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                <span>落实应用</span>
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500/50"></span>
                <span>发挥成效</span>
              </div>
            </motion.div>
          </header>

          {/* Main Grid */}
          <main className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow">
            {data.sections.map((section, index) => (
              <motion.div
                key={section.id}
                layoutId={`card-${section.id}`}
                onClick={() => setSelectedId(section.id)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                className={`cursor-pointer rounded-3xl border ${section.color} bg-[#0f172a]/40 backdrop-blur-md p-6 hover:bg-[#0f172a]/60 transition-all group overflow-hidden relative shadow-lg hover:shadow-xl flex flex-col`}
              >
                {/* Large background icon */}
                <div className="absolute -top-6 -right-6 p-6 opacity-[0.03] group-hover:opacity-[0.08] transition-all transform group-hover:scale-110 group-hover:-rotate-12 duration-700 pointer-events-none">
                  {React.cloneElement(section.icon as React.ReactElement, { className: "w-48 h-48" })}
                </div>
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-2xl ${section.iconBg} border border-white/5 shadow-inner`}>
                      {React.cloneElement(section.icon as React.ReactElement, { className: "w-6 h-6" })}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-wide">{section.title}</h2>
                  </div>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 flex-grow">
                    {section.summary}
                  </p>
                  <div className="flex items-center text-xs md:text-sm font-semibold text-white/40 group-hover:text-white/90 transition-colors mt-auto">
                    <span className="uppercase tracking-wider">点击查看详情</span>
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </main>
          
          {/* Footer */}
          <footer className="mt-8 text-left opacity-40 text-xs font-medium tracking-wide">
            <p>AI是必答题，非选择题。全员必须主动拥抱AI，人人成为AI建设者。</p>
          </footer>
        </div>

        {/* Right Column: Iframe */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="w-full xl:w-7/12 flex-grow min-h-[600px] xl:min-h-[calc(100vh-4rem)] bg-[#0f172a]/40 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative flex flex-col"
        >
          <div className="h-12 bg-[#0f172a]/80 border-b border-white/10 flex items-center px-6 z-10 flex-shrink-0">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
            </div>
            <div className="mx-auto text-xs text-slate-400 font-mono bg-black/20 px-4 py-1 rounded-full">
              华创易信AI工作台 - 交互演示
            </div>
          </div>
          <div className="flex-grow relative bg-white">
            <iframe 
              src="http://39.174.173.89:8033/" 
              className="absolute inset-0 w-full h-full border-0"
              title="交互演示"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />
          </div>
        </motion.div>
      </div>

      {/* Modal / Expanded View */}
      <AnimatePresence>
        {selectedId && selectedSection && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 p-4 md:p-8 pointer-events-none">
              <motion.div
                layoutId={`card-${selectedSection.id}`}
                className={`w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] border ${selectedSection.color} bg-[#0B1120] shadow-2xl pointer-events-auto flex flex-col`}
              >
                {/* Modal Header */}
                <div className="flex-shrink-0 flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-[#0f172a]/80 backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
                     {React.cloneElement(selectedSection.icon as React.ReactElement, { className: "w-48 h-48" })}
                  </div>
                  <div className="flex items-center gap-5 relative z-10">
                    <div className={`p-4 rounded-2xl ${selectedSection.iconBg} border border-white/5`}>
                      {selectedSection.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">{selectedSection.title}</h2>
                      <p className="text-slate-400 text-sm md:text-base hidden md:block">{selectedSection.summary}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedId(null)}
                    className="p-3 rounded-full hover:bg-white/10 transition-colors text-slate-400 hover:text-white relative z-10 bg-black/20"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                {/* Modal Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-grow custom-scrollbar">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {selectedSection.details.map((detail, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                        className={`bg-slate-800/30 rounded-3xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-colors ${idx === selectedSection.details.length - 1 && selectedSection.details.length % 2 !== 0 ? 'lg:col-span-2' : ''}`}
                      >
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                          <div className={`p-1.5 rounded-lg ${selectedSection.iconBg}`}>
                            <ChevronRight className="w-5 h-5 text-white/70" />
                          </div>
                          {detail.subtitle}
                        </h3>
                        <ul className="space-y-4">
                          {detail.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3 text-slate-300 leading-relaxed">
                              <CheckCircle2 className="w-5 h-5 text-white/20 mt-0.5 flex-shrink-0" />
                              <span className="text-[15px]">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
      
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}} />
    </div>
    </>
  );
}
