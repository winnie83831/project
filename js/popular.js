 // 宣告index用來代表目前是第幾筆記錄，0表示第一筆
        // 共用的變數宣告在所有function之外
        let index = 0;
        let img = new Array("提拉米蘇.jpg", "日式輕乳酪蛋糕.png", "芋頭蛋糕.jpg","布朗尼蛋糕(25入).jpg","芒果提拉米蘇.jpg", "金莎榛果巧克力.jpg", "重乳酪蛋糕.png","草莓布朗尼蛋糕.jpg","黑岩優格乳酪蛋糕.jpg", "蜂蜜檸檬生乳酪塔.jpg", "瑪爾蛋糕.jpg","鮮奶泡芙(20入).jpg");
        let title = new Array("提拉米蘇", "日式輕乳酪蛋糕", "芋頭蛋糕","布朗尼蛋糕","芒果提拉米蘇", "金莎榛果巧克力", "重乳酪蛋糕","草莓布朗尼蛋糕","黑岩優格乳酪蛋糕", "蜂蜜檸檬生乳酪塔", "瑪爾蛋糕","鮮奶泡芙(20入)");
        let info = new Array("優惠價NT$ 260", "優惠價NT$ 260", "優惠價NT$ 340","優惠價NT$ 320","優惠價NT$ 320", "優惠價NT$ 340", "優惠價NT$ 580","優惠價NT$ 270","優惠價NT$ 300", "優惠價NT$ 320", "優惠價NT$ 260","優惠價NT$ 260");

        function toHTML(index) {
            let hm =
            "<div class='div-all'>" +
                "<div class='row' >" +
                "<div class='col-sm-6 col-lg mb-3'>"+
                "<div class='card h-100' style='width: 18rem'>"+
                "<img src='images/"+ img[index] +"' class='card-img-top img-p' alt='Card image cap'/>"+
                "<div class='card-body'>" +
                "<h5 class='card-title'> "+ title[index] +"</h5>"+
                "<p class='card-text'>"+ info[index] +"</p>"+
                "</div>" +
                "</div>" +
                "</div>"+
                "<div class='col-sm-6 col-lg mb-3'>"+
                "<div class='card h-100' style='width: 18rem'>"+
                "<img src='images/"+ img[index+1] +"' class='card-img-top img-p' alt='Card image cap'/>"+
                "<div class='card-body'>" +
                "<h5 class='card-title'> "+ title[index+1] +"</h5>"+
                "<p class='card-text'>"+ info[index+1] +"</p>"+
                "</div>" +
                "</div>" +
                "</div>"+
                "<div class='col-sm-6 col-lg mb-3'>"+
                "<div class='card h-100' style='width: 18rem'>"+
                "<img src='images/"+ img[index+2] +"' class='card-img-top img-p' alt='Card image cap'/>"+
                "<div class='card-body'>" +
                "<h5 class='card-title'> "+ title[index+2] +"</h5>"+
                "<p class='card-text'>"+ info[index+2] +"</p>"+
                "</div>" +
                "</div>" +
                "</div>"+
                "<div class='col-sm-6 col-lg mb-3'>"+
                "<div class='card h-100' style='width: 18rem'>"+
                "<img src='images/"+ img[index+3] +"' class='card-img-top img-p' alt='Card image cap'/>"+
                "<div class='card-body '>" +
                "<h5 class='card-title'> "+ title[index+3] +"</h5>"+
                "<p class='card-text'>"+ info[index+3] +"</p>"+
                "</div>" +
                "</div>" +
                "</div>"+
                "</div>" +
                "</div>" ;
            return hm;
        }

        window.onload = function () {
            //將toHTML()函式取得的夜市資料呈現在#div_cont元素上
            div_cont.innerHTML = toHTML(index);
            let btnPrev1 = document.getElementById("btnPrev1");
            let btnNext1 = document.getElementById("btnNext1");
            btnPrev1.addEventListener("click", fnPrev1, false);
            btnNext1.addEventListener("click", fnNext1, false);
    
        }
         //將toHTML()函式取得的夜市資料呈現在#div_cont元素上
        // $(document).ready(function () {

            // var timer = setInterval(fnNext, 2000);
            // $(".div").hover(function () {
            //     clearInterval(timer);
            // }, function () {
            //     timer = setInterval(fnNext, 2000);
            // });

        //按上一篇鈕執行
        function fnPrev1() {
            //移往上一筆
            index--;
            // 判斷是否超出第一筆
            if (index < 0) {
                //指定從最後一筆開始
                index = img.length - 1;
            }
            // index = index % img.length;

            //將toHTML()函式取得的夜市資料呈現在#div_cont元素上
            div_cont.innerHTML = toHTML(index);

        }
        //按下一篇鈕執行
        function fnNext1() {
            //移往下一筆
            index=index+4;
            // 判斷是否超出最後一筆
            if (index >= img.length) {
                //指定從第一筆開始
                index = 0;
            }
            // index = index % img.length;
            //將toHTML()函式取得的夜市資料呈現在#div_cont元素上
            div_cont.innerHTML = toHTML(index);
        }