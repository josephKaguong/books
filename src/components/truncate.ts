

export  const Truncate=(text:string, wordlimit:number)=>{
    const words = text.split(" ")
    if (words.length <= wordlimit) {
        return text;
      }
      return words.slice(0, wordlimit).join(' ') + '...';
    }
