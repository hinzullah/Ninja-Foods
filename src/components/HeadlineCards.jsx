import React from 'react'
import salad from '../images/mix-salad.jpeg'
import rice from '../images/rice.jpeg'
import doughnut from '../images/doughnut.jpeg'
import crunches from '../images/crunches.jpeg'
import pizza from '../images/pizza.jpeg'
import spag from '../images/spag.jpeg'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Cards*/}
        <div className='rounded-xl relative'> 
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={salad} alt="Fruit-salad" />
        </div>
        <div className='rounded-xl relative'> 
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Food Republic</p>
                <p className='px-2'>Your best homely bite</p>
                <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={rice} alt="Fruit-salad" />
        </div>
        <div className='rounded-xl relative'> 
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Chicken Republic</p>
                <p className='px-2'>Our Flour is mind blowing</p>
                <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={doughnut} alt="Fruit-salad" />
        </div>
        <div className='rounded-xl relative'> 
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Unique Kitchen</p>
                <p className='px-2'>Here To serve you the best</p>
                <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={crunches} alt="Fruit-salad" />
        </div>
        <div className='rounded-xl relative'> 
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Domino Pizza</p>
                <p className='px-2'>The best after McDonalds</p>
                <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={pizza} alt="Fruit-salad" />
        </div>
        <div className='rounded-xl relative'> 
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
                <p className='font-bold text-2xl px-2 pt-4'>Delight Foods</p>
                <p className='px-2'>Awemazing Aroma</p>
                <button className='border-white bg-white text-black absolute bottom-4'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={spag} alt="Fruit-salad" />
        </div>
        
    </div>
  )
}

export default HeadlineCards