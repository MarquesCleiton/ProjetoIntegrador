import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duvidas',
  templateUrl: './duvidas.component.html',
  styleUrls: ['./duvidas.component.css']
})
export class DuvidasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      // Add minus icon for collapse element which is open by default
      $(".collapse.show").each(function(){
        $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
      });
      
      // Toggle plus minus icon on show hide of collapse element
      $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
      }).on('hide.bs.collapse', function(){
        $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
      });
  });
  }


}
