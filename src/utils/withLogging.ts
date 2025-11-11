export const functionWithLogging = (fn: any) => {
    return function (...args:any) {
        console.log("calling function with args", args);  
        const result:any = fn(...args);
        console.log(result)
        return result;        
    }
}