import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpBackend, HttpClient, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LayoutModule, TranslationManagementModule} from '@valtimo/layout';
import {TaskModule} from '@valtimo/task';
import {environment} from '../environments/environment';
import {SecurityModule} from '@valtimo/security';
import {BuildingBlockManagementModule} from '@valtimo/building-block-management';
import {TeamsModule} from '@valtimo/teams';
import {
  BpmnJsDiagramModule,
  MenuModule,
  WidgetModule,
  enableCustomFormioComponents,
  registerFormioCurrencyComponent,
  registerFormioCurrentUserComponent,
  registerFormioFileSelectorComponent,
  registerFormioIbanComponent,
  registerFormioUploadComponent,
  registerFormioValueResolverSelectorComponent,
} from '@valtimo/components';
import {
  CaseDetailTabAuditComponent,
  CaseDetailTabDocumentsComponent,
  CaseDetailTabNotesComponent,
  CaseDetailTabProgressComponent,
  CaseDetailTabSummaryComponent,
  CaseModule,
  DefaultTabs
} from '@valtimo/case';
import {ProcessModule} from '@valtimo/process';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IkoModule, registerIkoSearchFormioComponent} from '@valtimo/iko';
import {DashboardModule} from '@valtimo/dashboard';
import {DocumentModule} from '@valtimo/document';
import {AccountModule} from '@valtimo/account';
import {ChoiceFieldModule} from '@valtimo/choice-field';
import {ResourceModule} from '@valtimo/resource';
import {FormModule} from '@valtimo/form';
import {SwaggerModule} from '@valtimo/swagger';
import {AnalyseModule} from '@valtimo/analyse';
import {ProcessManagementModule} from '@valtimo/process-management';
import {DecisionModule} from '@valtimo/decision';
import {MilestoneModule} from '@valtimo/milestone';
import {LoggerModule} from 'ngx-logger';
import {FormManagementModule} from '@valtimo/form-management';
import {ProcessLinkModule} from '@valtimo/process-link';
import {MigrationModule} from '@valtimo/migration';
import {CaseManagementModule} from '@valtimo/case-management';
import {BootstrapModule} from '@valtimo/bootstrap';
import {ConfigModule, ConfigService, CustomMultiTranslateHttpLoaderFactory, LocalizationService} from '@valtimo/shared';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {FormFlowManagementModule} from '@valtimo/form-flow-management';
import {PluginManagementModule} from '@valtimo/plugin-management';
import {
  BesluitenApiPluginModule,
  besluitenApiPluginSpecification,
  CatalogiApiPluginModule,
  catalogiApiPluginSpecification,
  DocumentenApiPluginModule,
  documentenApiPluginSpecification,
  NotificatiesApiPluginModule,
  notificatiesApiPluginSpecification,
  ObjectenApiPluginModule,
  objectenApiPluginSpecification,
  ObjectTokenAuthenticationPluginModule,
  objectTokenAuthenticationPluginSpecification,
  ObjecttypenApiPluginModule,
  objecttypenApiPluginSpecification,
  OpenNotificatiesPluginModule,
  openNotificatiesPluginSpecification,
  OpenZaakPluginModule,
  openZaakPluginSpecification,
  PLUGINS_TOKEN,
  PortaaltaakPluginModule,
  portaaltaakPluginSpecification,
  SmartDocumentsPluginModule,
  smartDocumentsPluginSpecification,
  VerzoekPluginModule,
  verzoekPluginSpecification,
  ZakenApiPluginModule,
  zakenApiPluginSpecification
} from '@valtimo/plugin';
import {ObjectManagementModule} from '@valtimo/object-management';
import {ObjectModule} from '@valtimo/object';
import {AccessControlManagementModule} from '@valtimo/access-control-management';
import {DashboardManagementModule} from '@valtimo/dashboard-management';
import {CaseMigrationModule} from '@valtimo/case-migration';
import {registerDocumentenApiFormioUploadComponent, ZgwModule} from '@valtimo/zgw';
import {SseModule} from '@valtimo/sse';
import {LoggingModule} from '@valtimo/logging';

import {SmtpMailPluginModule, smtpmailPluginSpecification} from '@valtimo-plugins/smtpmail';
import {
  DocumentGeneratorPluginModule,
  documentGeneratorPluginSpecification,
  MailTemplatePluginModule,
  mailTemplatePluginSpecification,
  TextTemplatePluginModule,
  textTemplatePluginSpecification
} from '@valtimo-plugins/freemarker';

export function tabsFactory() {
  return new Map<string, object>([
    [DefaultTabs.summary, CaseDetailTabSummaryComponent],
    [DefaultTabs.progress, CaseDetailTabProgressComponent],
    [DefaultTabs.audit, CaseDetailTabAuditComponent],
    [DefaultTabs.documents, CaseDetailTabDocumentsComponent],
    [DefaultTabs.notes, CaseDetailTabNotesComponent]
  ]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    AccessControlManagementModule,
    AccountModule,
    AnalyseModule,
    AppRoutingModule,
    BesluitenApiPluginModule,
    BootstrapModule,
    BpmnJsDiagramModule,
    BrowserModule,
    BuildingBlockManagementModule,
    CaseManagementModule,
    CaseMigrationModule,
    CaseModule.forRoot(tabsFactory),
    CatalogiApiPluginModule,
    ChoiceFieldModule,
    CommonModule,
    ConfigModule.forRoot(environment),
    DashboardManagementModule,
    DashboardModule,
    DecisionModule,
    DocumentGeneratorPluginModule,
    DocumentModule,
    DocumentenApiPluginModule,
    FormFlowManagementModule,
    FormManagementModule,
    FormModule,
    FormsModule,
    IkoModule,
    LayoutModule,
    LoggerModule.forRoot(environment.logger),
    LoggingModule,
    MailTemplatePluginModule,
    MenuModule,
    MigrationModule,
    MilestoneModule,
    NotificatiesApiPluginModule,
    ObjectManagementModule,
    ObjectModule,
    ObjectTokenAuthenticationPluginModule,
    ObjectenApiPluginModule,
    ObjecttypenApiPluginModule,
    OpenNotificatiesPluginModule,
    OpenZaakPluginModule,
    PluginManagementModule,
    PortaaltaakPluginModule,
    ProcessLinkModule,
    ProcessManagementModule,
    ProcessModule,
    ReactiveFormsModule,
    ResourceModule,
    SecurityModule,
    SmartDocumentsPluginModule,
    SmtpMailPluginModule,
    SseModule,
    SwaggerModule,
    TaskModule,
    TeamsModule,
    TextTemplatePluginModule,
    TranslationManagementModule,
    VerzoekPluginModule,
    WidgetModule,
    ZakenApiPluginModule,
    ZgwModule,
    environment.authentication.module,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: CustomMultiTranslateHttpLoaderFactory,
        deps: [HttpBackend, HttpClient, ConfigService, LocalizationService]
      }
    }),
  ],
  providers: [
    {
      provide: PLUGINS_TOKEN,
      useValue: [
        besluitenApiPluginSpecification,
        catalogiApiPluginSpecification,
        documentGeneratorPluginSpecification,
        documentenApiPluginSpecification,
        mailTemplatePluginSpecification,
        notificatiesApiPluginSpecification,
        objectTokenAuthenticationPluginSpecification,
        objectenApiPluginSpecification,
        objecttypenApiPluginSpecification,
        openNotificatiesPluginSpecification,
        openZaakPluginSpecification,
        portaaltaakPluginSpecification,
        smartDocumentsPluginSpecification,
        smtpmailPluginSpecification,
        textTemplatePluginSpecification,
        verzoekPluginSpecification,
        zakenApiPluginSpecification
      ]
    },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    enableCustomFormioComponents(injector);
    registerFormioCurrencyComponent(injector);
    registerFormioUploadComponent(injector);
    registerFormioCurrentUserComponent(injector);
    registerFormioFileSelectorComponent(injector);
    registerDocumentenApiFormioUploadComponent(injector);
    registerFormioIbanComponent(injector);
    registerFormioValueResolverSelectorComponent(injector);
    registerIkoSearchFormioComponent(injector);
  }
}
