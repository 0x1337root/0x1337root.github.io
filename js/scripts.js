const videoIDs = [
  "XGGXlj6grzQ",
  "QPXU_mvj2dg",
  "Q7NEddtWbBA",
  "DNGG4l8Kw2A",
  "isC24rUtO5U",
  "V3lmf_KIAOU",
  "BOn3Tu2vfS0",
  "1XiIlZ74m1A",
  "RdUW7cv2JKM",
  "ctW93Rxr90E",
  "PkqSKnf3OeQ",
  "2jSMXR71d6c",
  "ym990mlAcvM",
  "MJDn70jh1V0",
  "DWKKsB0rD40",
  "pvpCX9qtyZE",
  "vKDQNGDOdE4",
  "XGcYPyZRyTY",
  "O_g-JmMfpF4",
  "fWquuWkHVP4",
  "4JWANCA-Pbw",
  "eXLRwFoB6tU",
  "OCwb7LaEHzw",
  "Gjht7acg9d4",
  "h5CwbYfkV64",
  "zVtZqFCm3cA",
  "71XgFf288KE",
  "M6o7pCadCIY",
  "NSlkW1fFkyo",
  "-PhIQBVcD3Y",
  "3bqLGebDRIY",
  "_P7u03BpuR4",
  "nUG872DyT5c",
  "3V9zxXN1rx0",
  "tXxf0wnca1g",
  "wKPZMc0FpXo",
  "eX4de4BH5lM"
];

let currentLanguage = 'en';

function setActive(navId) {
  const navIds = [
    'nav-root', 'nav-whoami', 'nav-blog',
    'nav-games', 'nav-liesofp', 'nav-hacking', 'nav-network', 'nav-web', 'nav-iot', 'nav-personal'
  ];
  navIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });
  document.getElementById(navId).classList.add('active');
}

function showRoot() {
  setActive('nav-root');
  const randomId = videoIDs[Math.floor(Math.random() * videoIDs.length)];
  document.getElementById('content-area').innerHTML = `
    <iframe id="yt-iframe" width="100%" height="100%" title="YouTube video player" frameborder="0" allowfullscreen style="border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);"></iframe>
  `;
  document.getElementById('yt-iframe').src = `https://www.youtube.com/embed/${randomId}`;
}

function showWhoami() {
  setActive('nav-whoami');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <embed src="docs/Omer-Faruk-Culha-Resume.pdf" type="application/pdf" class="pdf-viewer" style="max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5); width: 100%; height: 100%; background: #1a1a1a;" />
  `;
}

function showBlog() {
  setActive('nav-blog');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <div style="color: #fff; font-family: 'Fira Code', monospace; padding: 40px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #4ec9b0; font-size: 2.5rem; margin-bottom: 30px; border-bottom: 2px solid #404040; padding-bottom: 10px;">${t.blog_title}</h1>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
        
        <div id="content-games" style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 20px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#4ec9b0'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#404040'; this.style.transform='translateY(0)'">
          <h2 style="color: #4ec9b0; font-size: 1.5rem; margin: 0 0 15px 0;">${t.games_title}</h2>
          <p style="color: #b0b0b0; font-size: 1rem; line-height: 1.6; margin: 0;">
            ${t.games_description}
          </p>
          <div style="margin-top: 15px; color: #666; font-size: 0.9rem;">
            📁 liesofp/ - Lies of P içeriği
          </div>
        </div>
        
        <div id="content-hacking" style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 20px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#ff6b6b'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#404040'; this.style.transform='translateY(0)'">
          <h2 style="color: #ff6b6b; font-size: 1.5rem; margin: 0 0 15px 0;">${t.hacking_title}</h2>
          <p style="color: #b0b0b0; font-size: 1rem; line-height: 1.6; margin: 0;">
            ${t.hacking_description}
          </p>
          <div style="margin-top: 15px; color: #666; font-size: 0.9rem;">
            📁 test/ - Testler ve deneyler
          </div>
        </div>
        
        <div id="content-personal" style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 20px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#ff6b6b'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#404040'; this.style.transform='translateY(0)'">
          <h2 style="color: #ff6b6b; font-size: 1.5rem; margin: 0 0 15px 0;">${t.personal_title}</h2>
          <p style="color: #b0b0b0; font-size: 1rem; line-height: 1.6; margin: 0;">
            ${t.personal_description}
          </p>
          <div style="margin-top: 15px; color: #666; font-size: 0.9rem;">
            📁 Araştırma, Araçlar & Notlar
          </div>
        </div>
        
      </div>
    </div>
  `;
  
  // Add click events to subfolders in content area
  document.getElementById('content-games').onclick = function() {
    setActive('nav-games');
    showGames();
    // Open blog subfolder first
    const blogSubfolders = document.getElementById('blog-subfolders');
    const blogArrow = document.getElementById('blog-arrow');
    if (blogSubfolders.style.display === 'none') {
      blogSubfolders.style.display = 'block';
      blogArrow.textContent = '-';
    }
    // Open games subfolder
    const subfolders = document.getElementById('games-subfolders');
    const arrow = document.getElementById('games-arrow');
    if (subfolders.style.display === 'none') {
      subfolders.style.display = 'block';
      arrow.textContent = '-';
    }
  };
  
  document.getElementById('content-hacking').onclick = function() {
    setActive('nav-hacking');
    showHacking();
    // Open blog subfolder first
    const blogSubfolders = document.getElementById('blog-subfolders');
    const blogArrow = document.getElementById('blog-arrow');
    if (blogSubfolders.style.display === 'none') {
      blogSubfolders.style.display = 'block';
      blogArrow.textContent = '-';
    }
    // Open hacking subfolder
    const subfolders = document.getElementById('hacking-subfolders');
    const arrow = document.getElementById('hacking-arrow');
    if (subfolders.style.display === 'none') {
      subfolders.style.display = 'block';
      arrow.textContent = '-';
    }
  };
  
  document.getElementById('content-personal').onclick = function() {
    setActive('nav-personal');
    showPersonal();
    // Open blog subfolder first
    const blogSubfolders = document.getElementById('blog-subfolders');
    const blogArrow = document.getElementById('blog-arrow');
    if (blogSubfolders.style.display === 'none') {
      blogSubfolders.style.display = 'block';
      blogArrow.textContent = '-';
    }
  };
}

function showGames() {
  setActive('nav-games');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <div style="color: #fff; font-family: 'Fira Code', monospace; padding: 40px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #4ec9b0; font-size: 2.5rem; margin-bottom: 30px; border-bottom: 2px solid #404040; padding-bottom: 10px;">${t.games_title}</h1>
      
      <div style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 30px; margin-top: 30px;">
        <h2 style="color: #4ec9b0; font-size: 1.8rem; margin-bottom: 20px;">${t.games_subtitle}</h2>
        <p style="color: #b0b0b0; font-size: 1.1rem; line-height: 1.7; margin-bottom: 25px;">
          ${t.games_welcome}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-top: 30px;">
          <div id="content-liesofp" style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#4ec9b0'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#404040'; this.style.transform='translateY(0)'">
            <h3 style="color: #4ec9b0; font-size: 1.3rem; margin-bottom: 10px;">📄 liesofp</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.liesofp_content_description}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #4ec9b0; font-size: 1.3rem; margin-bottom: 10px;">🎯 ${t.coming_soon}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.more_content}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add click event for liesofp
  document.getElementById('content-liesofp').onclick = function() {
    setActive('nav-liesofp');
    showLiesOfP();
    // Open games subfolder first
    const gamesSubfolders = document.getElementById('games-subfolders');
    const gamesArrow = document.getElementById('games-arrow');
    if (gamesSubfolders.style.display === 'none') {
      gamesSubfolders.style.display = 'block';
      gamesArrow.textContent = '-';
    }
  };
}

function showLiesOfP() {
  setActive('nav-liesofp');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <div style="color: #fff; font-family: 'Fira Code', monospace; padding: 40px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #4ec9b0; font-size: 2.5rem; margin-bottom: 30px; border-bottom: 2px solid #404040; padding-bottom: 10px;">${t.liesofp_title}</h1>
      
      <div style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 30px; margin-top: 30px;">
        <h2 style="color: #4ec9b0; font-size: 1.8rem; margin-bottom: 20px;">${t.liesofp_subtitle}</h2>
        <p style="color: #b0b0b0; font-size: 1.1rem; line-height: 1.7; margin-bottom: 25px;">
          ${t.liesofp_description_long}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">⚔️ ${t.boss_strategies}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.boss_strategies_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🗺️ ${t.walkthrough}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.walkthrough_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🔧 ${t.build_guides}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.build_guides_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showHacking() {
  setActive('nav-hacking');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <div style="color: #fff; font-family: 'Fira Code', monospace; padding: 40px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #ff6b6b; font-size: 2.5rem; margin-bottom: 30px; border-bottom: 2px solid #404040; padding-bottom: 10px;">${t.hacking_title}</h1>
      
      <div style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 30px; margin-top: 30px;">
        <h2 style="color: #ff6b6b; font-size: 1.8rem; margin-bottom: 20px;">${t.hacking_subtitle}</h2>
        <p style="color: #b0b0b0; font-size: 1.1rem; line-height: 1.7; margin-bottom: 25px;">
          ${t.hacking_description_long}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
          <div id="content-network" style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#ff6b6b'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#404040'; this.style.transform='translateY(0)'">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">${t.network_title}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.network_description}
            </p>
          </div>
          
          <div id="content-web" style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#ff6b6b'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#404040'; this.style.transform='translateY(0)'">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">${t.web_title}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.web_description}
            </p>
          </div>
          
          <div id="content-iot" style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.borderColor='#ff6b6b'; this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='#404040'; this.style.transform='translateY(0)'">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">${t.iot_title}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.iot_description}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Add click events for subcategories
  document.getElementById('content-network').onclick = function() {
    setActive('nav-network');
    showNetwork();
  };
  
  document.getElementById('content-web').onclick = function() {
    setActive('nav-web');
    showWeb();
  };
  
  document.getElementById('content-iot').onclick = function() {
    setActive('nav-iot');
    showIoT();
  };
}

function showNetwork() {
  setActive('nav-network');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <div style="color: #fff; font-family: 'Fira Code', monospace; padding: 40px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #ff6b6b; font-size: 2.5rem; margin-bottom: 30px; border-bottom: 2px solid #404040; padding-bottom: 10px;">${t.network_title}</h1>
      
      <div style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 30px; margin-top: 30px;">
        <h2 style="color: #ff6b6b; font-size: 1.8rem; margin-bottom: 20px;">${t.network_subtitle}</h2>
        <p style="color: #b0b0b0; font-size: 1.1rem; line-height: 1.7; margin-bottom: 25px;">
          ${t.network_description_long}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🔍 ${t.protocol_analysis}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.protocol_analysis_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🌐 ${t.network_penetration}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.network_penetration_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🛡️ ${t.security_tools}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.security_tools_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showWeb() {
  setActive('nav-web');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <div style="color: #fff; font-family: 'Fira Code', monospace; padding: 40px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #ff6b6b; font-size: 2.5rem; margin-bottom: 30px; border-bottom: 2px solid #404040; padding-bottom: 10px;">${t.web_title}</h1>
      
      <div style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 30px; margin-top: 30px;">
        <h2 style="color: #ff6b6b; font-size: 1.8rem; margin-bottom: 20px;">${t.web_subtitle}</h2>
        <p style="color: #b0b0b0; font-size: 1.1rem; line-height: 1.7; margin-bottom: 25px;">
          ${t.web_description_long}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🔓 ${t.owasp_top10}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.owasp_top10_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🌐 ${t.web_penetration}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.web_penetration_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🛠️ ${t.web_security_tools}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.web_security_tools_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showIoT() {
  setActive('nav-iot');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <div style="color: #fff; font-family: 'Fira Code', monospace; padding: 40px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #ff6b6b; font-size: 2.5rem; margin-bottom: 30px; border-bottom: 2px solid #404040; padding-bottom: 10px;">${t.iot_title}</h1>
      
      <div style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 30px; margin-top: 30px;">
        <h2 style="color: #ff6b6b; font-size: 1.8rem; margin-bottom: 20px;">${t.iot_subtitle}</h2>
        <p style="color: #b0b0b0; font-size: 1.1rem; line-height: 1.7; margin-bottom: 25px;">
          ${t.iot_description_long}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🔧 ${t.firmware_analysis}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.firmware_analysis_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🌐 ${t.iot_protocols}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.iot_protocols_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🛠️ ${t.embedded_systems}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.embedded_systems_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

function showPersonal() {
  setActive('nav-personal');
  const t = translations[currentLanguage];
  document.getElementById('content-area').innerHTML = `
    <div style="color: #fff; font-family: 'Fira Code', monospace; padding: 40px; max-width: 800px; margin: 0 auto;">
      <h1 style="color: #ff6b6b; font-size: 2.5rem; margin-bottom: 30px; border-bottom: 2px solid #404040; padding-bottom: 10px;">${t.personal_title}</h1>
      
      <div style="background: #2d2d2d; border: 2px solid #404040; border-radius: 8px; padding: 30px; margin-top: 30px;">
        <h2 style="color: #ff6b6b; font-size: 1.8rem; margin-bottom: 20px;">${t.personal_subtitle}</h2>
        <p style="color: #b0b0b0; font-size: 1.1rem; line-height: 1.7; margin-bottom: 25px;">
          ${t.personal_description_long}
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 30px;">
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">🔬 ${t.research_projects}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.research_projects_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">💻 ${t.personal_tools}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.personal_tools_desc}
            </p>
          </div>
          
          <div style="background: #1e1e1e; border: 1px solid #404040; border-radius: 6px; padding: 20px;">
            <h3 style="color: #ff6b6b; font-size: 1.3rem; margin-bottom: 15px;">📚 ${t.learning_notes}</h3>
            <p style="color: #b0b0b0; font-size: 0.95rem; line-height: 1.5;">
              ${t.learning_notes_desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}

document.getElementById('nav-root').onclick = showRoot;
document.getElementById('nav-whoami').onclick = showWhoami;
document.getElementById('nav-blog').onclick = function() {
  // Show blog content
  showBlog();
  // Expand/collapse
  const subfolders = document.getElementById('blog-subfolders');
  const arrow = document.getElementById('blog-arrow');
  if (subfolders.style.display === 'none') {
    subfolders.style.display = 'block';
    arrow.textContent = '-';
  } else {
    subfolders.style.display = 'none';
    arrow.textContent = '+';
  }
};

document.getElementById('nav-games').onclick = function() {
  const subfolders = document.getElementById('games-subfolders');
  const arrow = document.getElementById('games-arrow');
  setActive('nav-games');
  showGames();
  if (subfolders.style.display === 'none') {
    subfolders.style.display = 'block';
    arrow.textContent = '-';
  } else {
    subfolders.style.display = 'none';
    arrow.textContent = '+';
  }
};

document.getElementById('nav-liesofp').onclick = function() {
  setActive('nav-liesofp');
  showLiesOfP();
};

document.getElementById('nav-hacking').onclick = function() {
  const subfolders = document.getElementById('hacking-subfolders');
  const arrow = document.getElementById('hacking-arrow');
  setActive('nav-hacking');
  showHacking();
  if (subfolders.style.display === 'none') {
    subfolders.style.display = 'block';
    arrow.textContent = '-';
  } else {
    subfolders.style.display = 'none';
    arrow.textContent = '+';
  }
};

document.getElementById('nav-personal').onclick = function() {
  setActive('nav-personal');
  showPersonal();
};

document.getElementById('nav-network').onclick = function() {
  setActive('nav-network');
  showNetwork();
};

document.getElementById('nav-web').onclick = function() {
  setActive('nav-web');
  showWeb();
};

document.getElementById('nav-iot').onclick = function() {
  setActive('nav-iot');
  showIoT();
};

// Set root directory (/) as selected when page first loads
document.addEventListener('DOMContentLoaded', function() {
  // Set default language to English
  setLanguage('en');
  
  showRoot();
  document.getElementById('blog-subfolders').style.display = 'none';
  document.getElementById('blog-arrow').textContent = '+';
  document.getElementById('hacking-subfolders').style.display = 'none';
  document.getElementById('hacking-arrow').textContent = '+';
  document.getElementById('games-subfolders').style.display = 'none';
  document.getElementById('games-arrow').textContent = '+';
  
  // Language switching functionality
  document.getElementById('lang-tr').addEventListener('click', function() {
    setLanguage('tr');
  });
  
  document.getElementById('lang-en').addEventListener('click', function() {
    setLanguage('en');
  });
});

function setLanguage(lang) {
  currentLanguage = lang;
  
  // Update active button
  document.querySelectorAll('.flag-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`lang-${lang}`).classList.add('active');
  
  // Update page language
  document.documentElement.lang = lang;
  
  // Store language preference
  localStorage.setItem('preferred-language', lang);
  
  // Update all text content
  updatePageContent();
  
  console.log(`Language switched to: ${lang}`);
}

function updatePageContent() {
  const t = translations[currentLanguage];
  
  // Update terminal title
  document.querySelector('.terminal-title').textContent = t.terminal_title;
  
  // Update file permissions
  document.querySelectorAll('.dir-permissions').forEach(el => {
    el.textContent = t.permissions.dir;
  });
  
  document.querySelectorAll('.permissions').forEach(el => {
    el.textContent = t.permissions.file;
  });
  
  // Update current page content if it exists
  const contentArea = document.getElementById('content-area');
  if (contentArea) {
    // Re-render current page with new language
    const activeNav = document.querySelector('.dir-name.active, .file-item.active');
    if (activeNav) {
      const navId = activeNav.id;
      if (navId === 'nav-root') showRoot();
      else if (navId === 'nav-whoami') showWhoami();
      else if (navId === 'nav-blog') showBlog();
      else if (navId === 'nav-games') showGames();
      else if (navId === 'nav-liesofp') showLiesOfP();
      else if (navId === 'nav-hacking') showHacking();
      else if (navId === 'nav-network') showNetwork();
      else if (navId === 'nav-web') showWeb();
      else if (navId === 'nav-iot') showIoT();
      else if (navId === 'nav-personal') showPersonal();
    }
  }
}

// Navbar width should adjust content area when dragged
(function() {
  const nav = document.querySelector('.nav-strip');
  let isResizing = false;
  let startX, startWidth;

  function handleMouseDown(e) {
    const navRect = nav.getBoundingClientRect();
    if (e.clientX >= navRect.right - 4 && e.clientX <= navRect.right) {
      isResizing = true;
      startX = e.clientX;
      startWidth = nav.offsetWidth;
      
      // Disable pointer events for iframe/embed elements
      const iframes = document.querySelectorAll('iframe, embed');
      iframes.forEach(iframe => {
        iframe.style.pointerEvents = 'none';
      });
      
      document.body.style.cursor = 'ew-resize';
      e.preventDefault();
    }
  }

  function handleMouseMove(e) {
    if (!isResizing) {
      // Show cursor only on 4px border line
      const navRect = nav.getBoundingClientRect();
      if (e.clientX >= navRect.right - 4 && e.clientX <= navRect.right) {
        document.body.style.cursor = 'ew-resize';
      } else {
        document.body.style.cursor = '';
      }
      return;
    }
    
    let newWidth = startWidth + (e.clientX - startX);
    newWidth = Math.max(200, Math.min(window.innerWidth * 0.5, newWidth));
    document.body.style.setProperty('--nav-width', newWidth + 'px');
    document.body.style.cursor = 'ew-resize';
  }

  function handleMouseUp() {
    if (isResizing) {
      isResizing = false;
      
      // Re-enable iframe/embed elements
      const iframes = document.querySelectorAll('iframe, embed');
      iframes.forEach(iframe => {
        iframe.style.pointerEvents = 'auto';
      });
      
      document.body.style.cursor = '';
    }
  }

  // Add mousedown to navbar
  nav.addEventListener('mousedown', handleMouseDown);
  
  // Global mouse events
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('mouseup', handleMouseUp);
})(); 