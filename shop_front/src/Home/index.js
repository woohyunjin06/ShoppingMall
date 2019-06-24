import React, {Component} from 'react';
import {inject, observer} from "mobx-react";

import './Home.scss'

@inject('stores')
@observer
class Home extends Component {

    render() {
        return (
            <div className='root'>
                <header>
                    aaa
                </header>
                <nav>

                </nav>
                <section>
                    <div>베스트 추천 상품</div>
                    <hr/>
                </section>
                <aside>
                    ccc
                </aside>
                <body>
                    ddd
                </body>
            </div>
        )
    }
}

export default Home;
