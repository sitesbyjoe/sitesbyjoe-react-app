import React from 'react';

export default class Footer extends React.Component {

  scrollToTop () {
    console.log('wanna scroll to you, 0,0')
    window.scrollTo(0,0)
  }

  render () {
    return (
      <footer>
        <section>
          <h3>Find Me Places</h3>			
          <ul>						
            <li><a href="http://twitter.com/sitesbyjoe">Twitter</a></li>
            <li><a href="http://www.linkedin.com/in/sitesbyjoe">LinkedIn</a></li>
            <li><a href="http://www.facebook.com/pages/Rehoboth-MA/Sites-by-Joe/188921875564">Facebook</a></li>
            <li><a href="http://codeigniter.com/forums/member/40351/">CodeIgniter Forums Profile</a></li>
            <li><a title="Design Company Profile" href="http://www.designfirms.org/company/16733/sites-by-joe/">Profile on DesignFirms</a></li>
          </ul>
        </section>
        
        <section>	
          <h3>Friends</h3>			
          <ul>
            <li><a href="http://duxpond.com">Duxpond Communications</a></li>
            <li><a href="http://roadtripbabyboomer.com">Hitchhiking/Travel Adventure Book</a></li>
            <li><a href="http://freemealcenter.com" title="The Free Meal Center of Cape May County">The Free Meal Center</a></li>
            <li><a href="http://mountainmanandcitygirl.com">Mountain Man Blog</a></li>
          </ul>
        </section>
        
        <section>	
          <h3>Links for Web Nerds</h3>
          <ul>
            <li><a href="http://validator.w3.org/check?uri=referer">Validate our HTML</a></li>
            <li><a href="http://webstandardsgroup.org/">Web Standards Group Member</a></li>
            <li><a href="http://interact.webstandards.org/">WasP InterAct Curriculum</a></li>
          </ul>
        </section>
    
        <div className="back-to-top"><a onClick={this.scrollToTop }>Back to Top</a></div>
        
        <p className="credits">Copyright &copy;2013 Sites by Joe. All rights reserved.</p>
      </footer>
    )
  }

}