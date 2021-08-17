import Header from "./Header";
import './App.css';
import React, {useState} from "react";
import Input from "./Input";
import Submit from "./Button";

function App() {
    const [pageId, setPageId] = useState(1);

    const [pages, setPages] = useState([]);
    const [query, setQuery] = useState([]);

    const [input, setInput] = useState("");

    const weights = {};
    function addPage(page){
        setPages(prevPages=> {

            return [...prevPages, page];
        });
    }

    function sort(weights) {
        console.log(weights);
        const items = Object.keys(weights).map(function(key) {
            return [key, weights[key]];
        });

        items.sort(function(first, second) {
            return second[1] - first[1];
        });

        console.log(items.slice(0, 5));
    }
    function updatePageWeight(weight, page){
        const parentId = page.parentPageId;
        const keywords = page.keywords
        for (let j=0;j<keywords.length;j++){
            for (let k=0;k<query.length;k++){
                if (keywords[j] === query[k]){
                    if (parentId===0){
                        weight += (8-j)*(8-k);
                    }
                    else {
                        weight += (8-j)*(8-k)*0.1;
                    }
                }
            }
        }
        return weight;
    }
    const getWeights = () => {
        // let weights = {};
        for (let i=0;i<pages.length;i++) {
            const parentId = pages[i].parentPageId;
            // let weight = 0;
            if (parentId === 0) {
                weights[pages[i].pageId] = 0;
                weights[pages[i].pageId] = updatePageWeight(0, pages[i]);

            }
            else{
                weights[parentId] = updatePageWeight(weights[parentId], pages[i]);

            }
        }

        // console.log(pages);
    }

    function search(){
        const line = input.split(" ");
        console.log(line);
        if (line[0] === "P" || line[0] === "p"){
            addPage({pageId:pageId, keywords: line.slice(1), parentPageId: 0});
            setPageId(pageId+1);
        }
        else if (line[0] === 'Q' || line[0] === 'q'){
            setQuery(line.slice(1));
            getWeights();
            sort(weights);
            console.log(weights);
        }
        else if (line[0] === 'PP' || line[0] === 'pp'){
            addPage({pageId:pageId, keywords: line.slice(1), parentPageId: pageId-1});
            setPageId(pageId+1);
        }
        // console.log(pages)
    }

  return (
      <div>
        <Header/>
          <Input
              onChange={setInput}
          />
          <Submit
              submit = {search}
          />
      </div>
  );
}

export default App;
