import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material.module';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MaterialModule,RouterLink,NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  
  activeMenu:any = 0;
  menuList:any;
  
  ngOnInit(): void {
   this.setValues();
  }
  
  setValues(){
   this.menuList = [
     {title:'Home',imgPath:'/Components/sidebar/home.svg',alt:'home',routerPath:'/home'},
     {title:'Nested Panel',imgPath:'/Components/sidebar/document-previous.svg',alt:'request',routerPath:'/nestedPanel'},
     {title:'Checkbox',imgPath:'/Components/sidebar/drop.svg',alt:'production',routerPath:'/checkbox'},
     {title:'Stepper',imgPath:'/Components/sidebar/currency.svg',alt:'finance',routerPath:'/stepper'},
     {title:'Tabs',imgPath:'/Components/sidebar/layers.svg',alt:'factsheet',routerPath:'/tabs'},
     {title:'Form Fields',imgPath:'/Components/sidebar/queries.svg',alt:'queries',routerPath:'/formField'},
     {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},

    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
    //  {title:'Help & Support',imgPath:'/Components/sidebar/user-headset.svg',alt:'help-support'},
   ]
  }

  selectMenu(selectedMenu:any){
    this.activeMenu = selectedMenu;
  }
}
