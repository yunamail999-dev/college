import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, BookOpen } from 'lucide-react';

// ── 系列一：心靈佛學傳家寶 ──────────────────────────
const SERIES_1_TOTAL = 44;
const series1Images = Array.from({ length: SERIES_1_TOTAL }, (_, i) => {
    const num = String(i + 1).padStart(4, '0');
    return `${import.meta.env.BASE_URL}works/心靈佛學傳家寶 - 改_page-${num}.jpg`;
});

// ── 系列二：易經（108頁）────────────────────────────
const SERIES_2_TOTAL = 108;
const series2Images = Array.from({ length: SERIES_2_TOTAL }, (_, i) => {
    return `${import.meta.env.BASE_URL}works2/投影片${i + 1}.JPG`;
});

// ── 各系列設定 ────────────────────────────────────────
const SERIES = [
    {
        id: 1,
        title: '《心靈佛學傳家寶》',
        subtitle: '老師匯聚多年心法與研究精華，帶您透過文字與編排，觸碰內心深處的祥和與智慧。',
        label: '心靈佛學傳家寶',
        badge: '第一系列',
        badgeColor: 'from-accent-light to-accent',
        images: series1Images,
        total: SERIES_1_TOTAL,
        previewCount: 12,
        altPrefix: '心靈佛學傳家寶 內頁',
    },
    {
        id: 2,
        title: '《易經》',
        subtitle: '深入淺出地解析千年易經智慧，引導您探索宇宙萬物運行的規律，掌握生命的密碼。',
        label: '易經系列',
        badge: '第二系列',
        badgeColor: 'from-primary-500 to-primary-700',
        images: series2Images,
        total: SERIES_2_TOTAL,
        previewCount: 12,
        altPrefix: '易經 投影片',
    },
];

// ── 燈箱組件 ─────────────────────────────────────────
function Lightbox({ series, currentIndex, onClose, onPrev, onNext }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900/98"
            onClick={onClose}
        >
            {/* 關閉按鈕 */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-primary-400 hover:text-surface-primary bg-dark-800 hover:bg-accent rounded-full p-3 md:p-4 transition-all border border-primary-800/30 shadow-lg z-50 active:scale-95 cursor-pointer"
                aria-label="Close"
            >
                <X size={24} />
            </button>

            {/* 上一張 */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-primary-400 hover:text-surface-primary bg-dark-800 hover:bg-accent p-2 md:p-3 rounded-full transition-all border border-primary-800/30 shadow-lg z-50 active:scale-95 cursor-pointer"
                aria-label="Previous"
            >
                <ChevronLeft size={32} />
            </button>

            {/* 下一張 */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-primary-400 hover:text-surface-primary bg-dark-800 hover:bg-accent p-2 md:p-3 rounded-full transition-all border border-primary-800/30 shadow-lg z-50 active:scale-95 cursor-pointer"
                aria-label="Next"
            >
                <ChevronRight size={32} />
            </button>

            {/* 圖片容器 */}
            <div
                className="max-w-5xl max-h-[95vh] w-full px-14 flex flex-col items-center justify-center h-full z-10"
                onClick={(e) => e.stopPropagation()}
            >
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative bg-surface-primary rounded-xl shadow-card flex-1 max-h-[85vh] w-full flex items-center justify-center border-2 border-surface-tertiary"
                >
                    <img
                        src={series.images[currentIndex]}
                        alt={`${series.altPrefix} ${currentIndex + 1}`}
                        className="h-full w-auto object-contain select-none"
                        style={{ maxHeight: '100%', maxWidth: '100%' }}
                        draggable="false"
                    />
                </motion.div>

                <div className="mt-6 bg-dark-800 border border-primary-800/30 px-6 py-2.5 rounded-full text-accent font-semibold tracking-[0.15em] text-base">
                    {series.title}　PAGE {currentIndex + 1} / {series.total}
                </div>
            </div>
        </motion.div>
    );
}

// ── 主組件 ───────────────────────────────────────────
export default function WorksGallery() {
    const [activeSeries, setActiveSeries] = useState(0); // 0 = 系列一, 1 = 系列二
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const series = SERIES[activeSeries];

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? series.total - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === series.total - 1 ? 0 : prev + 1));
    };

    const openModal = (index) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleSwitchSeries = (idx) => {
        setActiveSeries(idx);
        setCurrentIndex(0);
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="works" className="py-24 md:py-32 relative overflow-hidden bg-dark-900">
            {/* 簡潔紋理 */}
            <div
                className="absolute inset-0 z-0 opacity-5"
                style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)',
                    backgroundSize: '24px 24px',
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* ── 標題區 ── */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                        className="inline-flex items-center justify-center p-5 bg-dark-800 border border-primary-900/30 rounded-2xl mb-8 shadow-card"
                    >
                        <BookOpen className="w-9 h-9 text-accent" strokeWidth={1.5} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-surface-primary mb-5 tracking-wide"
                    >
                        出版著作與成果
                    </motion.h2>
                    <div className="w-20 h-0.5 bg-accent mx-auto rounded-full mb-4" />
                </div>

                {/* ── 系列切換 Tab ── */}
                <div className="flex justify-center gap-3 sm:gap-4 mb-14 flex-wrap">
                    {SERIES.map((s, idx) => (
                        <motion.button
                            key={s.id}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => handleSwitchSeries(idx)}
                            className={`relative flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full font-bold text-base tracking-wide transition-all duration-300 border cursor-pointer overflow-hidden
                                ${activeSeries === idx
                                    ? 'text-dark-900 border-transparent shadow-glow'
                                    : 'text-primary-400 border-primary-800/40 bg-dark-800 hover:border-accent/40 hover:text-accent'
                                }`}
                        >
                            {/* 活躍時的漸層背景 */}
                            {activeSeries === idx && (
                                <span className={`absolute inset-0 bg-gradient-to-r ${s.badgeColor} z-0`} />
                            )}
                            <span className="relative z-10 text-xs font-semibold opacity-75">{s.badge}</span>
                            <span className="relative z-10">{s.title}</span>
                        </motion.button>
                    ))}
                </div>

                {/* ── 系列說明 ── */}
                <AnimatePresence mode="wait">
                    <motion.p
                        key={activeSeries}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="text-center text-lg md:text-xl text-primary-300 max-w-3xl mx-auto leading-relaxed font-light mb-16"
                    >
                        {series.subtitle}
                    </motion.p>
                </AnimatePresence>

                {/* ── 圖片網格 ── */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSeries}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mb-16 px-2 sm:px-0"
                    >
                        {series.images.slice(0, series.previewCount).map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.04, duration: 0.4 }}
                                className="relative aspect-[3/4] rounded-xl cursor-pointer group bg-dark-800 p-1.5 shadow-card hover:shadow-glow transition-all duration-300 overflow-hidden border border-primary-900/20 hover:border-accent/60"
                                onClick={() => openModal(index)}
                            >
                                <div className="w-full h-full relative overflow-hidden rounded-lg">
                                    <img
                                        src={img}
                                        alt={`${series.altPrefix} ${index + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-dark-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                        <div className="bg-surface-primary text-accent p-3 rounded-full shadow-soft transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                                            <Maximize2 className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* ── 完整閱覽按鈕 ── */}
                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => openModal(0)}
                        className="inline-flex items-center px-10 py-4 text-lg font-bold tracking-widest rounded-full text-dark-900 bg-gradient-to-r from-accent-light via-accent to-accent-light shadow-glow border border-accent-light/50 hover:shadow-glow-hover transition-all duration-300 relative overflow-hidden group cursor-pointer"
                    >
                        <span className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out_infinite] will-change-transform" />
                        <span className="relative z-10">完整閱覽電子書</span>
                        <span className="ml-3 px-2.5 py-0.5 rounded-full bg-dark-900/20 text-dark-900 text-sm font-bold relative z-10">
                            {series.total} 頁
                        </span>
                    </motion.button>
                </div>
            </div>

            {/* ── 燈箱 ── */}
            <AnimatePresence>
                {isModalOpen && (
                    <Lightbox
                        series={series}
                        currentIndex={currentIndex}
                        onClose={closeModal}
                        onPrev={prevSlide}
                        onNext={nextSlide}
                    />
                )}
            </AnimatePresence>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shine {
          0% { transform: translateX(0); }
          20% { transform: translateX(400%); }
          100% { transform: translateX(400%); }
        }
      `}} />
        </section>
    );
}
