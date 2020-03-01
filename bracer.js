function validBraces(braces){
    tracker = []
    for(let i=0;i < braces.length; i++){
      if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
        tracker.push(braces[i])
      } else{
        if(tracker.length === 0) return false
        let lastValue = tracker[tracker.length-1]
        if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
        {
          tracker.pop()
        } else {
          break;
        }
      }
    }
    return tracker.length === 0
  }
  
  validBraces("()()()}}{}{}")