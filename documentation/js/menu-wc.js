'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">eduflex-frontend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0f94e2366ad711d4cd784a6c14ffddf7"' : 'data-target="#xs-components-links-module-AppModule-0f94e2366ad711d4cd784a6c14ffddf7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0f94e2366ad711d4cd784a6c14ffddf7"' :
                                            'id="xs-components-links-module-AppModule-0f94e2366ad711d4cd784a6c14ffddf7"' }>
                                            <li class="link">
                                                <a href="components/AddClassYearComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddClassYearComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddCourseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddFacultyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddFacultyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddSubjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddSubjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AttendanceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AttendanceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FacultyFeedbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacultyFeedbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FacultyLeaveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FacultyLeaveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HodDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HodDashboardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HodSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HodSidebarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageClassYearComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageClassYearComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageCourseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageCourseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageFacultyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageFacultyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageStudentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ManageSubjectComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ManageSubjectComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentFeedbackComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentFeedbackComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StudentLeaveComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StudentLeaveComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateFacultyComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateFacultyComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateStudentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateStudentComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});