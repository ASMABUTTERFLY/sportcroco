import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch : string){
    let T=["a",'e','i','y','u','o']
  
   var ch1="";
   for (let i = 0; i < ch.length; i++) {
    let inter=ch[i];
      for (let j = 0; j < T.length; j++) {
       if (ch[i].toLowerCase()==T[j]) {
inter ="*";        
break;
      
       }
    
      }
      ch1=ch1+inter;
    }
    return ch1;
  }

}
