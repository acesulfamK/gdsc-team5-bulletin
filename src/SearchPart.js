import React from 'react';


class SearchPart extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            screenPart:"input"
        };
        this.state.isSearchOpen=false;
        this.state.willSearchWord="";
        
        this.state.posteds=[
      ];{/*全投稿 */}
      this.state.items=[];{/*表示する投稿ら */}
      this.state.searchedWord="";
    }

   

    handleSearch() {


        this.setState({searchedWord:this.state.willSearchWord});

    }

    
    componentDidMount() {
        this.setState({items: this.state.posteds});
    }


    filterList = (e) => {
        this.setState({willSearchWord:e.target.value});
        const updateList = this.state.posteds.filter((item) => {
          return item.toLowerCase().search( e.target.value.toLowerCase()) !== -1;
        })
        this.setState({items: updateList});
      }

    
        
    render() {

        return (
            <div>


                <div>
                    <form action="">
                      <input type="text" placeholder="search" onChange={this.filterList}/>
                    </form>
                    <button onClick={()=>this.handleSearch()}>
                        検索開始
                    </button>
                    
                </div>
                <div>
                    { this.state.searchedWord}の検索結果
                        {this.state.items.map((item, index) => {
                            return (
                              <li key={index}>{item}</li>
                            )  
                        })}   
                </div>
            </div>
        );
    }
}
export default SearchPart;