export function setLocalData(keys,val) {
  localStorage.setItem(keys,val)
}

export function getLocalData(keys) {
   if(!localStorage.getItem(keys)) {
     return []
   }else{
     return localStorage.getItem(keys).split(',')
   }
}
