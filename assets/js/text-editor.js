class TxtEditor {

    insertText(val) {
        return document.createTextNode(val);
    }
    createBtn(text) {
        let btn =  document.createElement("BUTTON");
        btn.append(document.createTextNode(text));
        btn.setAttribute("btn-id",text.toLowerCase());
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
            let createOutputBox = document.createElement("DIV");
            createOutputBox.setAttribute("output-id",counter);


            let createMainEdtr = document.createElement("DIV");
            
            createMainEdtr.setAttribute("devcorns-main-id",++counter);
            createMainEdtr.setAttribute("devcorns-area","true");

            let createHeader = document.createElement("DIV");
            let createBody = document.createElement("DIV");
            let createFooter = document.createElement("DIV");
            
            createMainEdtr.classList.add("editor-main");
            createHeader.classList.add("editor-header");
            createBody.classList.add("editor-body");
            createFooter.classList.add("editor-footer");
            
            createBody.append(this.createInput());

            createFooter.append(this.createBtn("Show"));
            
            createFooter.childNodes.forEach(elem => {
               
                console.log(elem,elem.getAttribute("btn-id"));
                
                elem.addEventListener("click",evntApply);
                
                function evntApply(event) {
                    
                    var btnVal = event.target.getAttribute("btn-id");

                    console.log("Switch value get "+ btnVal);

                    switch(btnVal) {

                        case "show":

                              if( createBody.hasChildNodes()) {
                            
                                let bodyTextLength = createBody.childNodes[0].value.length;
                                

                                if(bodyTextLength) {

                                    let bodyText = createBody.childNodes[0].value;
                                    
                                    console.log(bodyText);
                                    
                                    var output =  element.parentNode.insertBefore(createOutputBox,createMainEdtr);
                                    
                                    console.log(output)

                                    output.innerHTML = bodyText;
                                }

                            }

                        break;

                    }
                }
                
               

            });

            createFooter.classList.add("move-right")

            //write name here
            let boldBtn = this.createBtn("B");
            
            boldBtn.addEventListener("click",function() {
            
                if( createBody.hasChildNodes() && window.getSelection().toString().length ) {

                    let selectedText  = window.getSelection().toString();

                    var selElm  = document.createElement("SPAN");
    
                    selElm.textContent = selectedText;

                    console.log(createBody.childNodes[0].value.toString());
                    
                    var str = createBody.childNodes[0].value.toString();
                    createBody.childNodes[0].value = str.replace(selectedText,selectedText.bold());

                }

            });

            let italicBtn = this.createBtn("I");

            italicBtn.addEventListener("click",function() {
            
                if( createBody.hasChildNodes() && window.getSelection().toString().length ) {

                    let selectedText  = window.getSelection().toString();
                    console.log(selectedText.length);
                    var selElm  = document.createElement("SPAN");
    
                    selElm.textContent = selectedText;

                    console.log(createBody.childNodes[0].value.toString());
                    
                    var str = createBody.childNodes[0].value.toString();
                    createBody.childNodes[0].value = str.replace(selectedText,selectedText.italics());

                }

            }); 

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