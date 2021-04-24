import React from "react"

export default function Header(props) {
  return (
    <header id='header'>
    <div className="nav-item">
      <a className="nav-icon" href="#top" id="logo">
        {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">
              <path d="M433.136,277.264c-23.416-26.6-55.576-53.948-92.964-79.372c-1.556-20.912-4.028-41.152-7.388-60.188    c12.848-4.056,25.256-7.316,37.012-9.676c40.056-8.044,68.608-4.788,76.396,8.704c8.172,14.14-5.28,43.048-35.1,75.444    c-4.388,4.764-4.084,12.18,0.684,16.568c4.756,4.388,12.184,4.084,16.572-0.684c38.708-42.044,52.26-78.648,38.164-103.056    c-13.644-23.632-48.676-30.54-101.328-19.968c-34.744,6.98-74.5,21.152-115.216,40.824c-18.824-9.084-37.528-17.036-55.632-23.632    C207.784,61.68,229.648,23.456,250,23.456c16.012,0,34.072,25.312,47.128,66.06c1.98,6.164,8.576,9.568,14.748,7.588    c6.168-1.972,9.568-8.58,7.588-14.748C302.2,28.48,278.18,0,250,0c-38.92,0-66.172,54.52-80.472,125.98    c0,0.004-0.008,0.012-0.008,0.02c-0.316,0.916-0.472,1.844-0.552,2.772c-4.248,21.876-7.28,45.272-9.088,69.136    c-17.368,11.82-33.688,24.1-48.52,36.552c-9.932-9.1-18.96-18.212-26.888-27.22c-26.992-30.656-38.452-57.016-30.664-70.508    c8.152-14.116,39.812-16.94,82.632-7.376c6.316,1.42,12.588-2.564,14-8.888c1.412-6.324-2.568-12.588-8.888-14    c-55.616-12.42-93.992-5.844-108.06,18.536c-13.648,23.632-2.108,57.428,33.368,97.736c23.416,26.6,55.572,53.944,92.964,79.368    c1.552,20.916,4.028,41.156,7.384,60.192c-12.848,4.056-25.248,7.316-37.012,9.676c-40.044,8.04-68.604,4.788-76.392-8.704    c-8.248-14.28,5.476-43.48,35.812-76.208c4.404-4.748,4.12-12.168-0.628-16.572c-4.752-4.404-12.168-4.128-16.576,0.624    C33.12,313.512,19.296,350.408,33.496,375c9.492,16.44,29.332,24.788,58.248,24.788c12.656,0,27.052-1.6,43.076-4.82    c34.744-6.98,74.504-21.152,115.22-40.824c18.82,9.084,37.52,17.036,55.632,23.636c-13.448,60.544-35.316,98.768-55.668,98.768    c-15.968,0-33.992-25.2-47.036-65.768c-1.984-6.168-8.584-9.56-14.752-7.576c-6.168,1.98-9.556,8.584-7.576,14.752    C197.896,471.628,221.884,500,250,500c38.872,0,66.108-54.408,80.424-125.752c0.032-0.08,0.076-0.148,0.096-0.224    c0.344-1.016,0.496-2.044,0.56-3.068c4.224-21.796,7.24-45.1,9.04-68.868c17.372-11.816,33.704-24.104,48.528-36.548    c9.932,9.1,18.956,18.212,26.884,27.22c26.988,30.656,38.448,57.016,30.66,70.508c-8.12,14.072-39.668,16.924-82.32,7.448    c-6.312-1.392-12.584,2.58-13.992,8.904c-1.408,6.328,2.584,12.588,8.904,13.996c18.228,4.052,34.592,6.056,48.856,6.052    c29.112,0,49.444-8.344,58.872-24.668C480.152,351.364,468.616,317.568,433.136,277.264z M129.268,250.012    c9.112-7.532,18.84-14.984,28.98-22.316c-0.24,7.444-0.364,14.888-0.364,22.304c0,7.508,0.16,14.98,0.396,22.424    C148.068,265.052,138.392,257.556,129.268,250.012z M310.36,145.436c1.964,11.652,3.552,23.8,4.836,36.244    c-6.276-3.884-12.652-7.712-19.132-11.456c-6.508-3.752-13.06-7.348-19.616-10.868C287.928,154.196,299.26,149.568,310.36,145.436    z M189.788,145.508c11.016,4.104,22.28,8.784,33.64,13.872c-6.5,3.496-13,7.096-19.484,10.84    c-6.468,3.74-12.828,7.588-19.12,11.492C186.148,169.072,187.828,156.992,189.788,145.508z M189.644,354.564    c-1.964-11.652-3.556-23.8-4.832-36.244c6.272,3.884,12.648,7.708,19.136,11.456c6.5,3.752,13.052,7.348,19.612,10.868    C212.072,345.804,200.74,350.432,189.644,354.564z M310.212,354.5c-11.02-4.112-22.28-8.792-33.636-13.88    c6.5-3.496,12.996-7.096,19.488-10.84c6.456-3.736,12.816-7.584,19.116-11.488C313.856,330.932,312.176,343.012,310.212,354.5z     M317.532,288.984c-10.756,7.056-21.844,13.92-33.196,20.48c-11.432,6.596-22.892,12.764-34.292,18.52    c-11.492-5.792-22.992-11.952-34.372-18.52c-11.432-6.6-22.504-13.44-33.188-20.436c-0.728-12.844-1.144-25.888-1.144-39.028    c0-13.372,0.404-26.372,1.132-38.976c10.752-7.052,21.828-13.92,33.2-20.488c11.432-6.6,22.888-12.768,34.284-18.52    c11.492,5.792,22.992,11.952,34.38,18.52c11.424,6.6,22.5,13.436,33.18,20.432c0.732,12.848,1.144,25.888,1.144,39.032    C318.66,263.376,318.252,276.376,317.532,288.984z M341.752,272.312c0.244-7.444,0.364-14.892,0.364-22.312    c0-7.508-0.16-14.98-0.388-22.424c10.2,7.368,19.872,14.856,28.988,22.396C361.596,257.508,351.904,264.976,341.752,272.312z"/>
              <path d="M250,210.916c-21.552,0-39.088,17.532-39.088,39.084s17.536,39.084,39.088,39.084s39.088-17.532,39.088-39.084    C289.088,228.448,271.556,210.916,250,210.916z"/>
          </svg> */}
      </a>
    </div>
  
    <div className="navbar" id="text-navbar">
      <li className="nav-item"><a className="nav-text" href="#about">About</a></li>
      <li className="nav-item"><a className="nav-text" href="#music">Music</a></li>
      <li className="nav-item"><a className="nav-text" href="#sports">Sports</a></li>
      <li className="nav-item"><a className="nav-text" href="#travel">Travel</a></li>
    </div>
    
    <div className="navbar" id="logos-navbar">
      <li className="nav-item">
        <a className="nav-icon" href="https://www.linkedin.com/in/antonio-leblanc/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt"><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm-74.390625 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0"/></svg>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-icon" href="https://github.com/antonio-leblanc" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" id="Bold" enable-background="new 0 0 24 24" height="512" viewBox="0 0 24 24" width="512"><path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"/></svg>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-icon" href="https://www.youtube.com/channel/UCSSDzsX3hBaH05wc6ncPnCA" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" height="512pt" viewBox="0 0 512 512" width="512pt"><path d="m224.113281 303.960938 83.273438-47.960938-83.273438-47.960938zm0 0"/><path d="m256 0c-141.363281 0-256 114.636719-256 256s114.636719 256 256 256 256-114.636719 256-256-114.636719-256-256-256zm159.960938 256.261719s0 51.917969-6.585938 76.953125c-3.691406 13.703125-14.496094 24.507812-28.199219 28.195312-25.035156 6.589844-125.175781 6.589844-125.175781 6.589844s-99.878906 0-125.175781-6.851562c-13.703125-3.6875-24.507813-14.496094-28.199219-28.199219-6.589844-24.769531-6.589844-76.949219-6.589844-76.949219s0-51.914062 6.589844-76.949219c3.6875-13.703125 14.757812-24.773437 28.199219-28.460937 25.035156-6.589844 125.175781-6.589844 125.175781-6.589844s100.140625 0 125.175781 6.851562c13.703125 3.6875 24.507813 14.496094 28.199219 28.199219 6.851562 25.035157 6.585938 77.210938 6.585938 77.210938zm0 0"/></svg>
        </a>
      </li>
    </div>
  
    <div className="nav-item" id="toggle-menu">
      <a className="nav-icon" href="javascript:void(0);" onclick="menuClick()">
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512"><path d="m464.883 64.267h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 208.867h-417.766c-25.98 0-47.117 21.136-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149z"/><path d="m464.883 353.467h-417.766c-25.98 0-47.117 21.137-47.117 47.149 0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z"/></svg>
      </a>
    </div>
  
  </header>
  )
}