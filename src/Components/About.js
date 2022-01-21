import Header from "./Header";

const About = () => {
    return(
        <div className="App">
            <Header />
            <main> 
                <h2><ul>
                        <li>ID management</li>
                        <li>Styling</li>
                        <li>Redux?</li>
                        <li>Refactor</li>
                    </ul>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est magna, tincidunt vitae lobortis vel, ultrices ac nulla. Suspendisse sed aliquam dolor. Donec vulputate ex vitae metus iaculis elementum. Duis nisl ligula, pharetra efficitur nulla ac, pellentesque finibus urna. Proin vel felis ligula. Praesent vulputate mi felis, vitae aliquam odio rutrum et. Nunc ultricies, orci ac convallis ornare, diam lorem tincidunt quam, eu luctus leo erat vitae nisi.</p>
                <p>Nulla efficitur cursus arcu. Vestibulum pulvinar tellus a mi tincidunt, a porta ante elementum. Nunc congue nunc eget felis accumsan, eget elementum arcu euismod. Suspendisse venenatis risus ut odio luctus consectetur. Aenean mollis, mauris sed viverra faucibus, magna lectus sollicitudin risus, quis tempus arcu elit nec nisl. Nulla venenatis non ipsum non consectetur. Nulla eget consequat sem. Vestibulum porta mollis lorem viverra dignissim. Nullam mollis tempor rutrum. </p>
            </main>
        </div>
    )
}

export default About;