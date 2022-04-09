//вывод времени в 3 часовых поясах
function showTime() {
    var locale_time = new Date(); /*get locale time*/
   
    var hour=''+locale_time.getHours();hour=hour.length<2?'0'+hour:hour;
    var min=''+locale_time.getMinutes();min=min.length<2?'0'+min:min;
    var sec=''+locale_time.getSeconds();sec=sec.length<2?'0'+sec:sec;
    var tmp=hour+':'+min+':'+sec;
 
    document.getElementsByTagName('span')[0].innerHTML='Moscow  '+tmp+'  сейчас';

    
    var Paris = +new Date() - 60 * 60 * 2*1000;
    
    var Paris = new Date(Paris);
       
      
         var hour=''+Paris.getHours();hour=hour.length<2?'0'+hour:hour;
         var min=''+Paris.getMinutes();min=min.length<2?'0'+min:min;
         var sec=''+Paris.getSeconds();sec=sec.length<2?'0'+sec:sec;
         var tmp=hour+':'+min+':'+sec;
         
         document.getElementsByTagName('span')[1].innerHTML='Paris  '+tmp+'  - 2 часа';

    var Tokio = +new Date() + 60 * 60 * 6*1000;
    
    var Tokio = new Date(Tokio);
       
  
     var hour=''+Tokio.getHours();hour=hour.length<2?'0'+hour:hour;
     var min=''+Tokio.getMinutes();min=min.length<2?'0'+min:min;
     var sec=''+Tokio.getSeconds();sec=sec.length<2?'0'+sec:sec;
     var tmp=hour+':'+min+':'+sec;
     
     document.getElementsByTagName('span')[2].innerHTML='Tokyo  '+tmp+'  + 6 часов';   


    var t=setTimeout('showTime()',1000); /*рекурсивный вызов каждую сек. для корректировки времени*/
}

//показать или скрыть элемент
function showHide(element_id) {
        
        
            //Записываем ссылку на элемент в переменную obj
            var obj = document.getElementById(element_id); 
            //Если css-свойство display не block, то: 
            if (obj.style.display != "block") { 
                obj.style.display = "block"; //Показываем элемент
                document.getElementById('clock_').innerHTML='Скрыть время';
                
            }
            else 
            {
                obj.style.display = "none"; //Скрываем элемент
                document.getElementById('clock_').innerHTML='Показать время';
            }
       
}  
//ввод тестовых значений 
function test_()
{
    document.getElementById('col').value=3;
    document.getElementById('row').value=3;
    document.getElementById('Z').value=4;
    document.getElementById('matrix').value="2 5 3\n1 5 0\n7 8 6\n";
    sum();
}
//вывод информации
function info()
{
   
    alert ('ФИО: Коптев Марк Андреевич\nГруппа: 4931');
   
}
;(function(){
 
    var h = 0, l = 100, a = 0, myVar; 
    
    document.myForm.button.onmouseover = function () {
    a = 0;
    var myVar =setInterval(function () {
       document.myForm.button.style.background = "hsla("+h+", 50%,"+ l +"%, 1)";
       h++ ; l -= 0.4;
       if ( h == 360 || l <= 35 || a != 0) clearInterval(myVar);
    
       console.log( h );
   }, 20 );
   };
    
   document.myForm.button.onmouseout = function () {
    a++;
    var myVar2 =setInterval(function () {
       document.myForm.button.style.background = "hsla("+h+", 50%,"+ l +"%, 1)";
       h-- ; l += 0.4;
       if ( h == 0 || l >= 100 || a != 1 ) clearInterval(myVar2);
       console.log( h );
   }, 10 );
   };
    
   })();
//задания из ЛР3
function sum()
{
   
   
    var col = document.getElementById('col').value; 
    var row = document.getElementById('row').value; 
    var Z = document.getElementById('Z').value;            
   var result=0;
   list=document.getElementById('matrix').value.split('\n');
   var matrix=new Array();           
    for ( i = 0; i < row; i++) 
         matrix[i] = new Array();  
    
   for(i=0;i<row;i++)
   {
       arr=list[i].split(' ');
       for(j=0;j<col;j++)
       {
           matrix[i][j]=arr[j];
       }
   }
   var result=0;
   for(i=0;i<row;i++)
   {
       for(j=0;j<col;j++)
       {
           if(matrix[i][j]<Z)
            result=Number(result)+Number(matrix[i][j]);
       }
   }        
   
 
   document.getElementById('result').value=result;
   
   
    
   
}
//удаление строки
function deleteRow(row) {
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById('tab1').deleteRow(i);
}
//изменение размера и цвета
function change(i,key)
{
    if(key==0)
    document.getElementsByTagName('span')[i].style="font-size: 50px;	color: #0bda51;"

    if(key==1)
    document.getElementsByTagName('span')[i].style=" font-size: 30px;  color:#black;"
}
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
function rep()
{
    console.log(0);
    document.getElementById('sq').style.background="#0bda51";
    console.log(1);
    
    
    document.getElementById('sq').style.background="red";
    
    document.getElementById('sq').style.background="black";
    console.log(2);
   
    
   
    document.getElementById('sq').style.background="#769baa";
   
   
    
   
}
//добавление строки
function addRow()
{
    var d = document;
    // Считываем значения с формы
   var serv = d.getElementById('serv').value;
   var pay  = d.getElementById('pay').value;

   var c='<a class="s8"  onclick="deleteRow(this)">Удалить</a>';

    // Находим нужную таблицу
    var table = d.getElementById('tab1');

    // Создаем строку таблицы и добавляем ее
    var row = d.createElement("TR");
    table.appendChild(row);

    // Создаем ячейки в вышесозданной строке
    // и добавляем тх
    var td1 = d.createElement("TD");
    var td2 = d.createElement("TD");
    var td3 = d.createElement("TD");

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    // Наполняем ячейки
    td1.innerHTML = serv;
    td2.innerHTML = pay;
    td3.innerHTML = c;
}
