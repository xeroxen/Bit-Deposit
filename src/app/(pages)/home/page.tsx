"use client"
import AllGameMobile from '@/components/all-game-mobile/all-game-mobile';
import EvolutionBanner from '@/components/Banners/evolutionBanner';
import StaticGameCarousel from '@/components/static-game-carousel/static-game-carousel';
import SuggestedCarousel from '@/components/suggested-carrousel/suggested-carousel';
import React from 'react';

const Home = () => {
    return (
        <div className=" bg-gray-50 mt-10">
            {/* Game Section */}
            <div className="pt-20"> {/* Add top padding to avoid navbar overlap */}
                <div className="relative w-[382px] h-[105px] mx-auto mt-1 flex justify-between items-start gap-2">
                    {/* Game Card 1 - Up To 100% (Deposit Bonus) */}
                    <div className="relative w-[92px] h-[105px] flex flex-col items-center">
                        <div className="relative">
                            <div className="w-[84px] h-[80px] rounded-[20px] relative overflow-hidden mb-2 shadow-lg bg-gradient-to-br from-red-400 via-red-500 to-orange-400">
                                <div className="p-3 h-full flex flex-col justify-center items-center relative">
                                    <div className="text-white font-bold text-xs text-center tracking-wide leading-tight mb-0.5">DEPOSIT</div>
                                    <div className="text-white font-bold text-xs text-center tracking-wide leading-tight mb-1.5">BONUS</div>
                                    <div className="flex gap-1 flex-wrap justify-center mt-1.5">
                                        <div className="text-sm">💰</div>
                                        <div className="text-sm">💰</div>
                                        <div className="text-sm">💰</div>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-red-500 rounded-[10px] px-2 py-1 z-10">
                                    <span className="text-white font-bold text-[8px] leading-[10px] uppercase tracking-wide">NEW</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit h-4 font-semibold text-xs leading-4 flex items-center text-center text-[#1D3D68]">Up To 100%</div>
                    </div>

                    {/* Game Card 2 - Lottery */}
                    <div className="relative w-[92px] h-[105px] flex flex-col items-center">
                        <div className="w-[84px] h-[80px] rounded-[20px] relative overflow-hidden mb-2 shadow-lg bg-gradient-to-br from-violet-500 to-purple-700">
                            <div className="p-3 h-full flex flex-col justify-center items-center relative">
                                <div className="text-white font-bold text-xs text-center tracking-wide leading-tight">LOTTERY</div>
                                <div className="flex gap-1 flex-wrap justify-center mt-1.5">
                                    <div className="text-xs">🎱</div>
                                    <div className="text-xs">🟡</div>
                                    <div className="text-xs">🔴</div>
                                    <div className="text-xs">🟢</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit h-4 font-semibold text-xs leading-4 flex items-center text-center text-[#1D3D68]">Lottery</div>
                    </div>

                    {/* Game Card 3 - Casino */}
                    <div className="relative w-[92px] h-[105px] flex flex-col items-center">
                        <div className="w-[84px] h-[80px] rounded-[20px] relative overflow-hidden mb-2 shadow-lg bg-gradient-to-br from-pink-500 to-pink-700">
                            <div className="p-3 h-full flex flex-col justify-center items-center relative">
                                <div className="text-white font-bold text-xs text-center tracking-wide leading-tight">CASINO</div>
                                <div className="flex gap-1 items-center mt-1.5">
                                    <div className="text-sm">🎲</div>
                                    <div className="text-sm">🔵</div>
                                    <div className="text-sm">⚡</div>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit h-4 font-semibold text-xs leading-4 flex items-center text-center text-[#1D3D68]">Casino</div>
                    </div>

                    {/* Game Card 4 - Cricket */}
                    <div className="relative w-[92px] h-[105px] flex flex-col items-center">
                        <div className="relative">
                            <div className="w-[84px] h-[80px] rounded-[20px] relative overflow-hidden mb-2 shadow-lg bg-gradient-to-br from-violet-500 to-purple-700">
                                <div className="p-3 h-full flex flex-col justify-center items-center relative">
                                    <div className="text-white font-bold text-xs text-center tracking-wide leading-tight">CRICKET</div>
                                    <div className="flex gap-1 items-center mt-1.5">
                                        <div className="text-sm">🏏</div>
                                        <div className="text-sm">🔴</div>
                                    </div>
                                </div>
                                <div className="absolute top-2 right-2 bg-red-500 rounded-[10px] px-2 py-1 z-10">
                                    <span className="text-white font-bold text-[8px] leading-[10px] uppercase tracking-wide">NEW</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-fit h-4 font-semibold text-xs leading-4 flex items-center text-center text-[#1D3D68]">Cricket</div>
                    </div>
                </div>
            </div>
            <AllGameMobile />
            <SuggestedCarousel />
            <EvolutionBanner />
            <StaticGameCarousel />
            
            {/* Static Banner */}
            <div className="relative mt-8">
                <div className="absolute w-[382px] h-[92px] left-[calc(50%-191px)] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-900 bg-opacity-90 rounded-lg">
                        {/* Replace with actual image URL */}
                        <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/banner/1.png')" }}></div>
                    </div>
                    <h2 className="absolute left-2 top-12 font-bold text-[16.5px] leading-3 flex items-center text-white font-['Inter']">
                        Fun Fun 21
                    </h2>
                </div>
                {/* Spacer to maintain layout flow */}
                <div className="h-[120px]"></div>
            </div>
            {/* Static Banner */}
            <div className="relative mt-2">
                <div className="absolute w-[382px] h-[92px] left-[calc(50%-191px)] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-900 bg-opacity-90 rounded-lg">
                        {/* Replace with actual image URL */}
                        <div className="absolute inset-0 bg-cover bg-center rounded-lg" style={{ backgroundImage: "url('/banner/2.png')" }}></div>
                    </div>
                    <h2 className="absolute left-2 top-12 font-bold text-[16.5px] leading-3 flex items-center text-white font-['Inter']">
                        Fun Fun 21
                    </h2>
                </div>
                {/* Spacer to maintain layout flow */}
                <div className="h-[120px]"></div>
            </div>
        </div>
    );
};

export default Home;