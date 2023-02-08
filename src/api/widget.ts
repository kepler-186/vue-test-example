import Widget from "@/types/widget";

export async function getWidgetData(
  cityName: string, 
  callback: (result: Widget)=> void, 
  fallback?: (errorMessage: string)=>void
  ) {
    const   response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=cc02889ef9b3677e2acedf536f33e045&units=metric`
    )
  const result = await response.json()
  if( response.status != 200){
    if(fallback) {
      fallback(result.message) 
      return
    }
    throw new Error(result.message)
  }else{
    callback(result)
  }
}