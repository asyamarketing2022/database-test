// $(document).ready(function () {

jQuery(function () {

   $('.datepicker').datepicker();

   $('.multidate').datepicker({
      multidate: true
   }); 

   

   //Update User
      $('.table-row_user').each(function(){
         $(this).on("click", function(){
           $.ajax({
               type: 'POST',
               url: 'update-user.php',
               data: {
                  tableID:($(this).attr('value')),
               },
               success:function(data){
                  // console.log(data)
                  $('.updateform-user').html(data);
               }
            });
         });
      });

      $('#edit_employee').on('show.bs.modal', function (event) { 
         $(this).find('.nav a:first').tab('show');
     })


   //Update Project
   $('.table-row_projects').each(function(){
      $(this).on("click", function(){
         $.ajax({
            type: 'POST',
            url: 'update-project.php',
            data: {
                  tableID:($(this).attr('value')),
            },
            success:function(data){
               $('.updateform-project').html(data);
            }
         });
      });
   });

   //Pick Project
   // $('.table-row_projects').each(function(){
      $(".view-project").on("click", function(){
         $.ajax({
            type: 'POST',
            url: 'update-project.php',
            data: {
                  tableID:($(this).attr('value')),
            },
            success:function(data){
               $('.updateform-project').html(data);
            }
         });
      });
   // });



});

