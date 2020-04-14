$(document).ready(function() {
    var total = $('.s_box input[type="checkbox"],.s_box input[name="design"],.s_box input[name="platform"],.s_box input[name="language"]').on('change', function() {
        
        var sum = 0;
        
        
        $('.s_box input[type="checkbox"]:checked, .s_box input[name="design"]:checked').each(function() {
            sum += parseInt($(this).val());
        });
        
        
        var _add = sum; //총 합계 
        
        
        
         
         $('.s_box input[name="platform"]:checked').each(function() {
            platform = parseInt($(this).val());
        });
       

        
        total = (_add * (platform / 100));
        
        
//        total = (_add * ( platform / 100));
        
        
        
        
        
//        $('input[name="platform"]:checked').each(function() {
//            
//           
//            if (this.value == '130') {
//                
//               var platform = 130;
//            
//                total = (_add * ( platform / 100));
//                
//            }else if (this.value == '150') {
//                
//                var platform = 150;
//                total = (_add * ( platform / 100));
//                
//            }else{
//                
//                alert('asjhdjkasdh');
//            
//            }
//            
//        });
//
//        
        
        var _result = total.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        

        $('#price').text(_result);

      
  });


});

