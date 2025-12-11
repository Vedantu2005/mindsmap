import React from 'react';

// --- Main Component ---
const Pose5 = () => {
    return (
        <div className="bg-white font-sans flex justify-center items-start min-h-screen p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-7xl mx-auto">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8 sm:mb-12">
                    The Way It Works
                </h1>

                <ul class="mobile-app-section-list">
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-camera.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Camera</div>
                            </div>
                        </li>
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-human-model.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Human Pose Estimation Model Built to Your
                                    Requirements</div>
                            </div>
                        </li>
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-decoding-pose.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Decoding Pose Estimation Models Output</div>
                            </div>
                        </li>
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-tracking.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Joints Tracking</div>
                            </div>
                        </li>
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-jitter.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Jitter Removal Algorithms</div>
                            </div>
                        </li>
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-activity.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Activity Recognition</div>
                            </div>
                        </li>
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-counting.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Repetitions Counting</div>
                            </div>
                        </li>
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-error-detection.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Error Detection Algorithms</div>
                            </div>
                        </li>
                        <li class="mobile-app-section-list__list-item">
                            <div class="mobile-app-section-list__item">
                                <div style="background-image: url(../images/icon-results.svg);" class="mobile-app-section-list__figure"></div>
                                <div class="mobile-app-section-list__title">Display Results</div>
                            </div>
                        </li>
                    </ul>
            </div>
        </div>
    );
};

export default Pose5;

