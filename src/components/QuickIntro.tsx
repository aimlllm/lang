"use client";

import { useI18n } from "@/i18n/context";

export default function QuickIntro() {
  const { locale } = useI18n();

  if (locale !== "zh") return null;

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-1">
            称呼：刘师傅
          </h2>
          <p className="text-amber-400 font-semibold text-center text-lg mb-5">
            —— 专业建筑装修服务
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm sm:text-base">
            <span className="bg-amber-600/30 border border-amber-500/40 rounded-full px-4 py-1.5">
              ✅ 品质保证
            </span>
            <span className="bg-amber-600/30 border border-amber-500/40 rounded-full px-4 py-1.5">
              💰 价格实惠
            </span>
            <span className="bg-amber-600/30 border border-amber-500/40 rounded-full px-4 py-1.5">
              🆓 免费估价
            </span>
          </div>

          <p className="text-gray-300 font-medium mb-3 text-center">
            📌 可接项目（室内 / 室外）
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base text-gray-200">
            <div className="flex items-center gap-2">
              <span>🏠</span><span>新建｜加建｜改建</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🚗</span><span>ADU｜车房改室</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🍴</span><span>厨房翻新｜卫生间翻新</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🪟</span><span>地板｜室内外油漆</span>
            </div>
            <div className="flex items-center gap-2">
              <span>💡</span><span>水电安装｜门窗更换</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🏡</span><span>屋顶更换｜房间扩大</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🔧</span><span>室内外大小维修</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌳</span><span>前后院铺设</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
