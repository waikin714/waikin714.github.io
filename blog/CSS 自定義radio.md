# CSS 自定義radio button外觀 (CSS custom radio button style)

**問題：**直接對input元素做 css 外觀是沒有用的。

```html
<input type="radio" class="circle" name="pic" value="pic1" >
<input type="radio" class="circle" name="pic" value="pic2">
```

```scss
input {
    background-color: red;
}
```

**解決方法：**用label 來繞過此限制。我們在radio 按鈕後創建一個與radio按鈕外觀一樣的label。然後把radio按鈕的外觀隱藏起來，欺騙用戶來點擊label，但他們其實是點擊了radio按鈕。這樣我們便可以對label做外觀上的控制。

那我們先來介紹label。

## Label Tag

用來定義input元素的標籤。最主要用途為：**當選中標籤上的內容時，對應input元素會被選中。**這要求label中for的值要綁定為對應input元素的id。

舉例：下面的例子中，點擊Male字串就會點擊了radio按鈕

```html
<label for="male">Male</label>
<input type="radio" name="gender" id="male" value="male"><br>
```

## 教學

知道了Label的正規用法後，我們可以來做正事了。

先在radio按鈕後創建一個外觀一樣的label，然後在radio 最後的html語句中加上hidden，把radio 按鈕隱藏起來

```html
<input type="radio" id="radio1" name="radioGroup" hidden>
<label for="radio1" class="circle"></label>
<input type="radio" id="radio2" name="radioGroup" hidden>
<label for="radio2" class="circle"></label>
```

```scss
.circle { //把label外觀做成跟radio一樣
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    display: inline-block;
    border: 1px solid $red;
    vertical-align: middle;
    margin: 0 15px 0 3px;
    border-radius: 50%;
    &:hover {
        background-color: $grey;
        padding: 2px;
        background-color: $red;
        background-clip: content-box;
        }
    }
    input[type="radio"]:checked+.circle { // 當選中radio按鈕後，把label填滿顏色
    	background-color: $red;
    }
```

