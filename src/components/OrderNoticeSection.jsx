import React from 'react';

export default function OrderNoticeSection() {
    return (
        <section id="order-notice" className="py-16 md:py-24 bg-surface-secondary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8 md:mb-10">
                    <p className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-accent mb-3">
                        Important Notice
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-dark-900">
                        封序更正說明與查閱
                    </h2>
                </div>

                <div className="mx-auto max-w-3xl rounded-lg border border-primary-200 bg-white p-3 shadow-card">
                    <img
                        src={`${import.meta.env.BASE_URL}qa.png`}
                        alt="封序更正說明與查閱"
                        className="block w-full h-auto rounded-md"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
