import React from 'react';
import InputPartBody from './InputPartBody';
import PostedPartBody from './PostedPartBody';


class Body extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            screenPart:"input"
        }
        this.state.isSearchOpen=false;
        this.state.searchWord="";
    }

    handleOpenSearch() {

        this.setState({ isSearchOpen : true} );

    }

    handleCloseSearch() {

        this.setState({ isSearchOpen : false} );

    }

    handleWriteSearchBox(event){
        const inputValue = event.target.value;
        this.setState({searchWord:event.inputValue});

    }

    
        
    render() {

        let searchBox;

        if(this.state.isSearchOpen){
            searchBox=( 
                <div>
                    <input 
                        value = {this.state.searchWord}
                        onChange={(event)=>this.handleWriteSearchBox(event)}
                    />
                    <button onClick= { ()=>this.handleCloseSearch() }>
                        検索ボックスを閉じる
                    </button>
                </div>
            );
        }
            
       
          


        return (
            <div>
                <div>
                <button
                    onClick={()=>{ this.handleOpenSearch()}}
                >
                    検索する
                </button>
                <div>
                    { searchBox }
                </div>
            </div>
                <InputPartBody />
                <PostedPartBody />
            </div>
        );
    }
}
export default Body;