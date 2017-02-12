RxTween
=======

[![npm version](https://badge.fury.io/js/rxtween.svg)](http://badge.fury.io/js/rxtween)

**NOT ACTIVELY MAINTAINED. I'M LOOKING FOR A NEW MAINTAINER/OWNER FOR THIS REPOSITORY. [Contact me](http://staltz.com/) if you are interested.**

A small helper library to create animation-related RxJS Observables. Specify a start value, an end value, the duration, and an easing function, and you get an Observable emitting the interpolated values in intervals over time.

# Get started

#### Installing

Available only as an NPM package.

`npm install rxtween`

RxTween has RxJS as an npm peerDependency. This means RxTween will include RxJS into your project only if it isn't yet in your project. A good practice is to specify both `rxtween` and `rx` as your npm dependencies in `package.json`.

#### Usage

```js
import RxTween from 'rxtween';

let position$ = RxTween({
  from: 0,
  to: 20,
  duration: 1000,
  ease: RxTween.Exp.easeIn,
  interval: 20
});
```

`RxTween` is a factory function taking an `options` object as the only parameter, and returns an `Rx.Observable` emitting JavaScript Numbers. The `options` object takes properties `from`, `to`, `duration`, `ease` (optional, the default is Linear easing), and `interval` (optional).

# How it works

`RxTween()` factory function returns an `Rx.Observable.interval` Observable mapped to the correct interpolated values according to `from`, `to`, and `duration`. This whole sequence of values lasts `duration` milliseconds.

# Easing functions

### `RxTween.Linear.ease`

```
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
+---------------------
```

### `RxTween.Power2.easeIn`

```
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
+---------------------
```

### `RxTween.Power3.easeIn`

```
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
+---------------------
```

### `RxTween.Power4.easeIn`

```
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
+---------------------
```

### `RxTween.Exp.easeIn`

```
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
+---------------------
```

### `RxTween.Back.easeIn`

```
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
+---------------------
```

### `RxTween.Bounce.easeIn`

```
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
+---------------------
```

### `RxTween.Circ.easeIn`

```
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
+---------------------
```

### `RxTween.Elastic.easeIn`

```
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
+---------------------
```

### `RxTween.Sine.easeIn`

```
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
+---------------------
```


# Thanks

Stole (with permission) some ideas and functions from [RxJS Easing](https://github.com/trxcllnt/rxjs-easing) by Paul Taylor.

This project is a grateful recipient of the [Futurice Open Source sponsorship program](http://futurice.com/blog/sponsoring-free-time-open-source-activities?utm_source=github&utm_medium=spice&utm_campaign=rxtween).

## LICENSE

[The MIT License (MIT)](https://github.com/staltz/cycle/blob/master/LICENSE)
