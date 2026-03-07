import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, Image as ImageIcon } from 'lucide-react';

const totalImages = 44;
const images = Array.from({ length: totalImages }, (_, i) => {
    const num = String(i + 1).padStart(4, '0');
    return `/works/心靈佛學傳家寶 - 改_page-${num}.jpg`;
});

export default function WorksGallery() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
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

    return (
        <section id="works" className="py-24 md:py-32 relative overflow-hidden bg-[#2a3441]">
            {/* 帶有紋理的深色底圖：SVG 雜訊 + 暗色漸層 */}
            <div
                className="absolute inset-0 z-0 opacity-20 mix-blend-overlay"
                style={{
                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
                }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-[#2a3441] via-[#323d4d] to-[#2a3441] -z-10"></div>

            {/* 光暈特效裝飾移除，以避免干擾文字並解決「看起來髒」的問題 */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="inline-flex items-center justify-center p-6 bg-dark-800 border border-light-700/10 rounded-full mb-8 group overflow-hidden relative shadow-2xl shadow-black/40"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <ImageIcon className="w-10 h-10 text-accent transition-transform group-hover:scale-110" strokeWidth={1.5} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-6xl font-serif font-black text-white mb-6 tracking-wide drop-shadow-md text-shadow-glow"
                    >
                        出版著作與成果
                    </motion.h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto rounded-full mb-8"></div>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-normal tracking-wider">
                        《心靈佛學傳家寶》——<br className="block sm:hidden" /> <span className="font-editorial italic text-accent-light px-2 text-2xl md:text-3xl">Masterpiece</span> <br className="hidden sm:block" />
                        老師匯聚多年心法與研究精華，<br className="block sm:hidden" />帶您透過文字與編排，觸碰內心深處的祥和與智慧。
                    </p>
                </div>

                {/* Gallery Grid - Museum Frame Style */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8 mb-24 px-2 sm:px-0">
                    {images.slice(0, 12).map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 + 0.2, duration: 0.6 }}
                            className="relative aspect-[3/4] rounded-xl cursor-pointer group bg-[#2a313b] p-2 shadow-xl hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 overflow-hidden border border-light-700/20 hover:border-accent/80"
                            onClick={() => openModal(index)}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-aura-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="w-full h-full relative overflow-hidden rounded-lg">
                                <img
                                    src={img}
                                    alt={`心靈佛學傳家寶 內頁 ${index + 1}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover origin-center transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                    <div className="bg-white text-accent p-4 rounded-full shadow-lg shadow-accent/40 transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 border border-accent/20">
                                        <Maximize2 className="w-8 h-8" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openModal(0)}
                        className="inline-flex items-center px-12 py-5 text-xl font-bold tracking-widest rounded-full text-white bg-gradient-to-r from-accent-light via-accent to-accent-light shadow-lg shadow-accent/40 border border-white hover:shadow-xl hover:shadow-accent/60 transition-all duration-300 relative overflow-hidden group"
                    >
                        {/* Shimmer effect inside button */}
                        <span className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg] group-hover:animate-[shine_1.5s_ease-in-out_infinite]"></span>

                        <span className="relative z-10">完整閱覽電子書</span>
                        <span className="ml-4 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-black relative z-10 shadow-inner">44 頁</span>
                    </motion.button>
                </div>

            </div>

            {/* Extreme Visual Modal Gallery (Bright Textural Version) */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-dark-900/95 backdrop-blur-2xl"
                        style={{
                            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xlmns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
                            backgroundBlendMode: "overlay",
                        }}
                    >
                        {/* Modal ambient glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-accent/10 rounded-full blur-[150px] pointer-events-none"></div>

                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white bg-dark-800 hover:bg-accent hover:shadow-glow rounded-full p-3 md:p-4 transition-all border border-light-700/10 shadow-lg z-50 active:scale-95"
                        >
                            <X size={28} className="md:w-8 md:h-8" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                            className="absolute left-1 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-dark-800 hover:bg-accent p-2 md:p-4 rounded-full transition-all border border-light-700/10 shadow-xl group z-50 active:scale-95"
                        >
                            <ChevronLeft size={36} className="md:w-12 md:h-12 transform group-hover:-translate-x-1 md:group-hover:-translate-x-2 transition-transform" />
                        </button>

                        <button
                            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                            className="absolute right-1 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-dark-800 hover:bg-accent p-2 md:p-4 rounded-full transition-all border border-light-700/10 shadow-xl group z-50 active:scale-95"
                        >
                            <ChevronRight size={36} className="md:w-12 md:h-12 transform group-hover:translate-x-1 md:group-hover:translate-x-2 transition-transform" />
                        </button>

                        <div className="max-w-6xl max-h-[95vh] w-full px-12 pos-relative flex flex-col items-center justify-center h-full z-10">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                transition={{ duration: 0.4 }}
                                className="relative bg-white rounded-xl shadow-2xl flex-1 max-h-[85vh] w-full flex items-center justify-center border-4 border-white"
                            >
                                <img
                                    src={images[currentIndex]}
                                    alt={`心靈佛學傳家寶 內頁 ${currentIndex + 1}`}
                                    className="h-full w-auto object-contain select-none shadow-inner"
                                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                                    draggable="false"
                                />
                            </motion.div>

                            <div className="mt-8 bg-dark-800/80 border border-light-700/10 backdrop-blur-md px-8 py-3 rounded-full shadow-2xl shadow-black/50 text-accent font-bold tracking-[0.2em] text-lg font-display">
                                PAGE {currentIndex + 1} / {totalImages}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
