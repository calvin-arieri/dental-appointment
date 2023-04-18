const Blogs = (props) =>{
    return <div>
        <h1>Welcome to doctor blogs </h1>
        
            <div className="card">
                <h2>It is important for one to take care of there teeth since teeth lost cannot be replaced. </h2>
                <em>Please brush your teeth and visit the doctor reguraly.</em>

                {props.date}
            </div>
            <div className="card">
                <h2>Do not use any tobacco products. </h2>
                <em>If you smoke, quit.</em>
                {props.time}
            </div>
            <div className="card">
                <h2>If you have diabetes, work to maintain control of the disease. This will decrease risk for other complications, including gum disease. </h2>
                <em>Treating gum disease may help lower your blood sugar level. </em>
            </div>
            <div className="card">
                <h2>If your medication causes dry mouth, ask your doctor for a different medication that may not cause this condition. </h2>
                <em>If dry mouth cannot be avoided, drink plenty of water, chew sugarless gum, and avoid tobacco products and alcohol. </em>
            </div>
            <div className="card">
                <h2>Visit your dentist at least once a year.  </h2>
                <em>Even if you have no natural teeth or have dentures.</em>
            </div>
        
    </div>
}

export default Blogs ;