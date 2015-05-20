import test from 'tape';
import RxTween from '../src/index';
import {plot, plotTweenConfigs, makeAssertPlot} from './plot-utils';


test("RxTween.Linear.ease", function (assert) {
  let position$ = RxTween({ease: RxTween.Linear.ease, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                   # 
|                  #  
|                 #   
|                #    
|               #     
|              #      
|             #       
|            #        
|           #         
|          #          
|         #           
|        #            
|       #             
|      #              
|     #               
|    #                
|   #                 
|  #                  
| #                   
|#                    
+---------------------`));
});


test("RxTween.Power2.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Power2.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                     
|                   # 
|                     
|                  #  
|                     
|                 #   
|                #    
|                     
|               #     
|              #      
|                     
|             #       
|            #        
|           #         
|          #          
|         #           
|        #            
|      ##             
|    ##               
|####                 
+---------------------`));
});

test("RxTween.Power3.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Power3.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                     
|                     
|                   # 
|                     
|                  #  
|                     
|                     
|                 #   
|                     
|                #    
|                     
|               #     
|              #      
|                     
|             #       
|            #        
|          ##         
|         #           
|      ###            
|######               
+---------------------`));
});

test("RxTween.Power4.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Power4.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                     
|                     
|                     
|                   # 
|                     
|                     
|                  #  
|                     
|                     
|                 #   
|                     
|                #    
|                     
|               #     
|              #      
|             #       
|            #        
|           #         
|        ###          
|########             
+---------------------`));
});

test("RxTween.Exp.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Exp.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                     
|                     
|                     
|                     
|                   # 
|                     
|                     
|                     
|                  #  
|                     
|                     
|                 #   
|                     
|                #    
|                     
|               #     
|              #      
|            ##       
|         ###         
|#########            
+---------------------`));
});

test("RxTween.Back.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Back.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                     
|                     
|                     
|                   # 
|                     
|                     
|                     
|                  #  
|                     
|                     
|                 #   
|                     
|                     
|                #    
|                     
|               #     
|                     
|              #      
|                     
|#____________#       
+---------------------`));
});

test("RxTween.Bounce.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Bounce.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                   ##
|                     
|                  #  
|                 #   
|                     
|                     
|                #    
|                     
|                     
|               #     
|                     
|                     
|                     
|                     
|              #      
|        ###          
|           #         
|       #             
|            #        
|   ####      #       
|###                  
+---------------------`));
});

test("RxTween.Circ.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Circ.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                     
|                     
|                     
|                     
|                     
|                   # 
|                     
|                     
|                  #  
|                     
|                 #   
|                #    
|               #     
|              #      
|             #       
|            #        
|          ##         
|        ##           
|     ###             
|#####                
+---------------------`));
});

test("RxTween.Elastic.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Elastic.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                     
|                     
|                     
|                     
|                     
|                     
|                     
|                     
|                     
|                     
|                     
|                     
|                   # 
|                     
|                     
|                     
|                     
|              ##     
|             #       
|####___###___   ___  
+---------------------`));
});

test("RxTween.Sine.easeIn", function (assert) {
  let position$ = RxTween({ease: RxTween.Sine.easeIn, ...plotTweenConfigs});
  plot(position$).subscribe(makeAssertPlot(assert, `
|                    #
|                     
|                   # 
|                  #  
|                     
|                 #   
|                #    
|                     
|               #     
|              #      
|             #       
|                     
|            #        
|           #         
|          #          
|         #           
|        #            
|       #             
|     ##              
|   ##                
|###                  
+---------------------`));
});
