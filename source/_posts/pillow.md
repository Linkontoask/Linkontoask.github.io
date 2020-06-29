---
title: pillow
date: 2020-06-29 11:52:59
tags:
---

# Pillow

在`python2`中使用`pillow`时注意`pillow`的版本，具体版本支持列表如下：[官网](https://pillow.readthedocs.io/en/stable/installation.html#notes)

| Python | 3.8 | 3.7 | 3.6 | 3.5 | 3.4 | 3.3 | 3.2 | 2.7 | 2.6 | 2.5 | 2.4 |
|  ----  | ----  |----  | ----  |----  | ----  |----  | ----  |----  | ----  |----  | ----  |
| Pillow >= 7 | Yes |Yes | Yes | Yes	| | 	 | 	 | 	 | 	 | 	 | 	 | 
| Pillow 6.2.1 - 6.2.2 || Yes |Yes |Yes |Yes	 | 	 | 	 | |	Yes	 | 	 | 	 | 
| Pillow 6.0 - 6.2.0 | |	Yes |Yes|Yes	 | 	| | 	  	|Yes	 | 	 | 	 | 
| Pillow 5.2 - 5.4	 || |	Yes|	Yes|	Yes|	Yes	 | |		|Yes	 | 	 | 	 | 
| Pillow 5.0 - 5.1	| | |	Yes|	Yes|	Yes	 | 	|  	|Yes	 | 	 | 	 | 
| Pillow 4	 | 	| | 	Yes|	Yes|	Yes|	Yes	 | 	|Yes	 | 	 | 	 | 
| Pillow 2 - 3	 | |	 | 	 | 	Yes|	Yes	|Yes|	Yes|	Yes|	Yes	 | 	 | 
| Pillow < 2	 | 	| | 	 | 	 | 	 | 	 | 	 | 	Yes	|Yes|	Yes|	Yes|

如果发生如下错误
`ImportError: No module named Image`
请参考解决方案 [stackoverflow](https://stackoverflow.com/questions/31016085/importerror-no-module-named-image-importerror-no-module-named-pil-python/31035763)

