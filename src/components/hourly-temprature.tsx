import type { ForecastData } from "@/api/types"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { format } from "date-fns";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface ChartData{
    time:string;
    temp:number;
    feels_like:number;
}

interface  HourlyTemperatureProps{
    data:ForecastData;
}

const HourlyTemperature = ({data}:HourlyTemperatureProps) => {
   const chartData: ChartData[] = data.list.slice(0, 8) // Get next 24 hours (3-hour intervals)
    .map((item) => ({
      time: format(new Date(item.dt * 1000), "ha"),
      temp: Math.round(item.main.temp),
      feels_like: Math.round(item.main.feels_like),
    }));

  return (<Card className="flex-1">
  <CardHeader>
    <CardTitle>Today's Temperature</CardTitle>
  </CardHeader>
  <CardContent>
   <div className="h-[200px] w-full">
         <ResponsiveContainer width={"100%"} height={"100%"}>
              <LineChart data={chartData}>
              <XAxis dataKey="time"
               stroke="#888888"
               fontSize={12}
               tickLine={false}
               axisLine={false}/>
            
               <YAxis 
               stroke="#888888"
               fontSize={12}
               tickLine={false}
               axisLine={false}
               tickFormatter={(value)=>`${value}°`}/>
               {/* tooltip */}

               <Tooltip
               content={({active,payload})=>{

                if(active && payload && payload.length)
                {
                    return (
                        <div className="rounded-lg border border-gray-500 bg-background  p-2 shadow-sm "> 
                               <div className="grid grid-cols-2 gap-2">
                                <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Temperature</span>
                                    <span>{payload[0].value}°</span>
                                </div>
                               
                                <div className="flex flex-col">
                                    <span className="text-[0.70rem] uppercase text-muted-foreground">Feels Like</span>
                                    <span>{payload[1].value}°</span>
                                </div>
                             </div>
                        </div>
                    )
                }
                return null
               }}
               

               />

               <Line 
               type="monotone"
               dataKey="temp"
               stroke="#2563eb"
               strokeWidth={2}
               dot={false}
               />
                 <Line 
               type="monotone"
               dataKey="feels_like"
               stroke="#64748b"
               strokeWidth={2}
               dot={false}
               strokeDasharray="5 5"
               />
               


             </LineChart> 

         </ResponsiveContainer>
   </div>
  </CardContent>
</Card>)
}

export default HourlyTemperature