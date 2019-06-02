import React from 'react'
import { Link } from 'gatsby'

const GardenLinks = ({edges}) => (
    <aside className="sidebar" role="complementary">
        <div className="wrapper">
            <div className="design-selection" id="design-selection">
                <h3 className="select">Select a Design:</h3>
                <nav role="navigation">
                    <ul>
                    {
                        edges.map(
                            (edge, i) => <li><Link key={i} to={edge.node.fields.slug}>{edge.node.name}</Link></li>
                        )
                    }
                    </ul>
                </nav>
            </div>
        </div>
    </aside>
)

export default GardenLinks