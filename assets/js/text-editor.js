class TxtEditor {

    insertText(val) {
        return document.createTextNode(val);
    }
    createBtn(text) {
        let btn =  document.createElement("BUTTON");
        btn.append(document.createTextNode(text));
        btn.setAttribute("btn-id",text)
        return btn;

        
    }
    createInput() {
        return document.createElement("textarea")
    }

    initTextEditor(val) {

        var allEdtr = document.querySelectorAll(val);
        let counter = 0;
        allEdtr.forEach(element => {

            element.style.display = "none";

            let createMainEdtr = document.createElement("DIV");
            
            createMainEdtr.setAttribute("devcorns-main-id",++counter);
            createMainEdtr.setAttribute("devcorns-area","true");

            let createHeader = document.createElement("DIV");
            let createBody = document.createElement("DIV");
            let createFooter = document.createElement("DIV");
            
            createMainEdtr.classList.add("editor-main")
            createHeader.classList.add("editor-header");
            createBody.classList.add("editor-body");
            createFooter.classList.add("editor-footer");
            
            createBody.append(this.createInput());

            //write name here
            let boldBtn = this.createBtn("B");
            
            boldBtn.addEventListener("click",function() {
                
                let selectedText  = window.getSelection().toString();

                var selElm  = document.createElement("SPAN");

                selElm.textContent = selectedText;

                if(createBody.hasChildNodes()) {

                    console.log(createBody.childNodes[0].value.toString());

                    
                }

                //console.log(selectedText);

            });

            let italicBtn = this.createBtn("I");
            let underLineBtn = this.createBtn("U");

            createHeader.append(boldBtn,italicBtn,underLineBtn);
            //createBody.contentEditable = true;
            

            
            
            createMainEdtr.append(createHeader,createBody,createFooter);
            // createMainEdtr.parentNode.insertBefore(createBody,createMainEdtr);
            // createMainEdtr.parentNode.insertBefore(createFooter,createMainEdtr);
            
            var newNode = element.parentNode.insertBefore(createMainEdtr,element);
            
           

        });

    }

}


var txtEdtr = new TxtEditor();

txtEdtr.initTextEditor(".devcorns");