window.onload=function(){
	var veryical_line = document.getElementById("veryical_line");
	var img1 = document.getElementById("img1");
	var img2 = document.getElementById("img2"); 

    var distX = 0;
    var distY = 0;
    var onOff = false;

	veryical_line.onmousedown = function(event){
		
		onOff = true;

		event.stopPropagation();
		event.preventDefault();

		distX = event.clientX - veryical_line.offsetLeft;  
        
        if (onOff){
	        document.onmousemove = function(event){

	        	event.stopPropagation();
				event.preventDefault();

	            var x = event.clientX - distX;
	          
	            if(x<0){ x=0;}else if(x>580){ x=580;}  

	            veryical_line.style.left=x+'px';
	            img1.style.width = x+'px';
	     
	            document.onmouseup=function(){  
					
	                document.onmousemove=null;  
	                document.onmouseup=null;  
	            } 

	            onOff = false; 
	        }        	
        }

	}

}