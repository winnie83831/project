
		$(document).ready(function () {
			// when a hanburger menu is clicked
			let $ul = $(".nav__list"),
				$menu = $(".nav__menu");
		
			$($menu).click(function () {
				// toggle menu-click Class
				$ul.toggleClass("menu-click");
			}); // end click event handler
		});  


        let select = 1;
        let preSelect = 1;
        let Mpage = 4;
        let timer = null;


        // 網頁載入完成執行
        $(document).ready(function () {
            
            
            $("#div-select").empty();
            // 將預覽圖div1~div4新增到#div-select元素
            for (let i = 1; i <=4; i++) {
                $("#div-select").append
                    (
                        "<div id='div" + i + "' class='round'></div>"
                    );
                // 預覽圖區塊div1~div13新增click事件處理函式fnChange
                // 按下預覽圖會傳送num參數，此參數為圖片編號
                $("#div" + i).on("click", { num: i }, fnChange1);
            }
            // 判斷往左與右鈕是否出現
            fnChange();
            // 按下往左鈕執行fnPrev函式
            $("#btnPrev").on("click", fnPrev);
            // 按下往右鈕執行fnNext函式
            $("#btnNext").on("click", fnNext);
            timer = setInterval(fnNext, 3500);
            $("#div-show").hover(function () {
                clearInterval(timer);
            }, function () {
                timer = setInterval(fnNext, 3500);
            }
            );
        })

        function fnChange1(a) {
            // 取得選取的圖片編號並組成完成圖檔
            let filename = "images/banner_" + a.data.num + ".jpg"
            select = a.data.num;
            // 顯示圖片
            $("#show").attr("src", filename);
            // 呈現淡出動畫
            $("#show").hide().fadeIn(1000);
            $("#div" + select).addClass("addBorder");
            $("#div" + preSelect).removeClass("addBorder");
            preSelect = select;

        }


        function fnChange() {
            // 取得選取的圖片編號並組成完成圖檔
            $("#div" + preSelect).removeClass("addBorder");
            $("#div" + select).addClass("addBorder");
            var filename = "images/banner_" + select + ".jpg"

            // 顯示圖片
            $("#show").attr("src", filename);
            // 呈現淡出動畫
            $("#show").hide().fadeIn(1000);
            preSelect = select;

        }

        // 往左鈕事件處理函式
        function fnPrev() {
            preSelect = select;
            if (select <= 1) {
                select = Mpage;
            }
            else {
                select -= 1;
            }
            fnChange();
        }
        // 往右鈕事件處理函式
        function fnNext() {
            preSelect = select;
            if (select >= Mpage) {
                select = 1;
            }
            else {
                select += 1;
            }
            fnChange();
        }
   


		
		
