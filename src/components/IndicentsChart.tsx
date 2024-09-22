"use client"

import Image from 'next/image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    cat1: 2,
    cat2: 0,
    cat3: 2,
    cat4: 8,
    cat5: 6,
    cat6: 9,
  },
  {
    name: 'Feb',
    cat1: 0,
    cat2: 1,
    cat3: 3,
    cat4: 5,
    cat5: 8,
    cat6: 10,
  },
  {
    name: 'Mar',
    cat1: 2,
    cat2: 0,
    cat3: 2,
    cat4: 8,
    cat5: 6,
    cat6: 9,
  },
  {
    name: 'Apr',
    cat1: 0,
    cat2: 1,
    cat3: 3,
    cat4: 5,
    cat5: 8,
    cat6: 10,
  },
  {
    name: 'May',
    cat1: 2,
    cat2: 0,
    cat3: 2,
    cat4: 8,
    cat5: 6,
    cat6: 9,
  },
  {
    name: 'Jun',
    cat1: 0,
    cat2: 1,
    cat3: 3,
    cat4: 5,
    cat5: 8,
    cat6: 10,
  },
  {
    name: 'Jul',
    cat1: 0,
    cat2: 0,
    cat3: 0,
    cat4: 0,
    cat5: 0,
    cat6: 0,
  },
  {
    name: 'Aug',
    cat1: 0,
    cat2: 0,
    cat3: 0,
    cat4: 0,
    cat5: 0,
    cat6: 0,
  },
  {
    name: 'Sep',
    cat1: 2,
    cat2: 0,
    cat3: 2,
    cat4: 8,
    cat5: 6,
    cat6: 9,
  },
  {
    name: 'Oct',
    cat1: 1,
    cat2: 1,
    cat3: 4,
    cat4: 6,
    cat5: 7,
    cat6: 11,
  },
  {
    name: 'Nov',
    cat1: 0,
    cat2: 0,
    cat3: 4,
    cat4: 7,
    cat5: 18,
    cat6: 20,
  },
  {
    name: 'Dec',
    cat1: 0,
    cat2: 1,
    cat3: 3,
    cat4: 5,
    cat5: 8,
    cat6: 10,
  },
];

const IndicentsChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'>
        {/* title */}
        <div className='flex justify-between items-center'>
            <h1 className='text-lg font-semibold'>Incidents</h1>
            <Image src="/moreDark.png" width={20} height={20} alt=''/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" stroke='#ddd'/>
            <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
            <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
            <Tooltip contentStyle={{borderRadius:"10px", borderColor: "lightgray"}}/>
            <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px", paddingBottom:"30px"}}/>
            <Line type="monotone" dataKey="cat1" stroke="#ec0000"  strokeWidth={3} />
            <Line type="monotone" dataKey="cat2" stroke="#ec2400" strokeWidth={3} />
            <Line type="monotone" dataKey="cat3" stroke="#ec5300" strokeWidth={3} />
            <Line type="monotone" dataKey="cat4" stroke="#ec9b00" strokeWidth={3} />
            <Line type="monotone" dataKey="cat5" stroke="#ecca00"  strokeWidth={3}/>
            <Line type="monotone" dataKey="cat6" stroke="#FAE27C" strokeWidth={3}/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default IndicentsChart