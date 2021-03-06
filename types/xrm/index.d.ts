// Type definitions for Microsoft Dynamics xRM API 9.0
// Project: https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/developer-guide
// Definitions by:  David Berry <https://github.com/6ix4our>
//                  Matt Ngan <https://github.com/mattngan>
//                  Markus Mauch <https://github.com/markusmauch>
//                  Daryl LaBar <https://github.com/daryllabar>
//                  Tully H <https://github.com/clownwilleatme>
//                  Scott Durow <https://github.com/scottdurow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare var Xrm: Xrm.XrmStatic;
declare function GetGlobalContext(): Xrm.Context;

interface Window {
    Xrm: Xrm.XrmStatic;
    GetGlobalContext(): Xrm.Context;
}

declare namespace Xrm {
    /**
     * Static xRM object.
     */
    interface XrmStatic {
        /**
         * Provides a namespace container for the context, data and ui objects.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         */
        Page: Page;

        /** Provides navigation-related methods.
         */
        Navigation: Navigation;

        /**
         * Provides a container for useful functions not directly related to the current page.
         */
        Utility: Utility;

        /**
         * Provides methods to create and manage records in the mobile clients (for phones tablets).
         */
        Mobile: Mobile;

        /**
         * Provides methods to display a web page in the side pane of web client.
         *
         * @see {@link https://msdn.microsoft.com/en-us/library/mt790281.aspx} for details.
         */
        Panel: Panel;

        /**
         * Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement.
         *
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi} for details
         */
        WebApi: WebApi;

        /**
         * Provides methods to use native device capabilities of mobile devices.
         *
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device} for details
         */
        Device: Device;

        /**
         * Provides methods to encode strings.
         *
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding} for details
         */
        Encoding: Encoding;
    }

    /**
     * Client Types for Xrm.Page.context.getClient().
     */
    type Client = "Web" | "Outlook" | "Mobile";

    /**
     * Client States for Xrm.Page.context.getClientState().
     */
    type ClientState = "Online" | "Offline";

    /**
     * Themes for Xrm.Page.context.getCurrentTheme().
     */
    type Theme = "default" | "Office12Blue" | "Office14Silver";

    /**
     * Interface for the client context.
     */
    interface ClientContext {
        /**
         * Returns a value to indicate which client the script is executing in.
         *
         * @return The client, as either "Web", "Outlook", or "Mobile"
         */
        getClient(): Client;

        /**
         * Gets client's current state.
         *
         * @return The client state, as either "Online" or "Offline"
         */
        getClientState(): ClientState;

        /**
         * Use this method to get information about the kind of device the user is using.
         */
        getFormFactor(): XrmEnum.ClientFormFactor;

        /**
         * Returns information whether the server is online or offline.
         */
        isOffline(): boolean;
    }

    /**
     * Returns information about the current organization settings.
     */
    interface OrganizationSettings {
        /**
         * Returns the ID of the base currency for the current organization.
         */
        baseCurrencyId: string;

        /**
         * Returns the default country/region code for phone numbers for the current organization.
         */
        defaultCountryCode: string;
        /**
         * Indicates whether the auto-save option is enabled for the current organization.
         */
        isAutoSaveEnabled: boolean;

        /**
         * Returns the preferred language ID for the current organization.
         */
        languageId: number;

        /**
         * Returns the ID of the current organization.
         */
        organizationId: string;

        /**
         * Returns the unique name of the current organization.
         */
        uniqueName: string;

        /**
         * Indicates whether the Skype protocol is used for the current organization.
         */
        useSkypeProtocol: boolean;
    }

    /**
     * Interface for the DateFormattingInfo.calendar field
     */
    interface Calendar {
        MinSupportedDateTime: Date;
        MaxSupportedDateTime: Date;
        AlgorithmType: number;
        CalendarType: number;
        Eras: number[];
        TwoDigitYearMax: number;
        IsReadOnly: boolean;
    }

    /**
     * Interface for UserSettings.dateFormattingInfo response
     */
    interface DateFormattingInfo {
        amDesignator: string;
        abbreviatedDayNames: string[];
        abbreviatedMonthGenitiveNames: string[];
        abbreviatedMonthNames: string[];
        calendarWeekRule: number;
        calendar: Calendar;
        dateSeparator: string;
        dayNames: string[];
        firstDayOfWeek: number;
        fullDateTimePattern: string;
        longDatePattern: string;
        longTimePattern: string;
        monthDayPattern: string;
        monthGenitiveNames: string[];
        monthNames: string[];
        pmDesignator: string;
        shortDatePattern: string;
        shortTimePattern: string;
        shortestDayNames: string[];
        sortableDateTimePattern: string;
        timeSeparator: string;
        universalSortableDateTimePattern: string;
        yearMonthPattern: string;
    }

    /**
     * Holds information about the current user settings.
     */
    interface UserSettings {
        /**
         * Returns the date formatting information for the current user.
         */
        dateFormattingInfo(): DateFormattingInfo;
        /**
         * Returns the ID of the default dashboard for the current user.
         */
        defaultDashboardId: string;
        /**
         * Indicates whether guided help is enabled for the current user.
         */
        isGuidedHelpEnabled: boolean;
        /**
         * Indicates whether high contrast is enabled for the current user.
         */
        isHighContrastEnabled: boolean;
        /**
         * Indicates whether the language for the current user is a right-to-left (RTL) language.
         */
        isRTL: boolean;
        /**
         * Returns the language ID for the current user.
         */
        languageId: number;
        /**
         * Returns an array of strings that represent the GUID values of each of the security role privilege that the user is associated with or any teams that the user is associated with.
         */
        securityRolePrivileges: string[];
        /**
         * Returns an array of strings that represent the GUID values of each of the security role that the user is associated with or any teams that the user is associated with.
         */
        securityRoles: string[];
        /**
         * Returns the transaction currency ID for the current user.
         */
        transactionCurrencyId: string;
        /**
         * Returns the GUID of the SystemUser.Id value for the current user.
         */
        userId: string;
        /**
         * Returns the name of the current user.
         */
        userName: string;
        /**
         * Returns the difference in minutes between the local time and Coordinated Universal Time (UTC).
         */
        getTimeZoneOffsetMinutes(): number;
    }

    /**
     * properties of the current business app in Customer Engagement.
     */
    interface AppProperties {
        appId?: string;
        displayName?: string;
        uniqueName?: string;
        url?: string;
        webResourceId?: string;
        webResourceName?: string;
        welcomePageId?: string;
        welcomePageName?: string;
    }

    /**
     * Interface for the xRM application context.
     */
    interface Context {
        /**
         * The client's context instance.
         */
        client: ClientContext;

        /**
         * Returns information about the current organization settings.
         */
        organizationSettings: OrganizationSettings;

        /**
         * Returns information about the current user settings.
         */
        userSettings: UserSettings;

        /**
         * Returns information about the advanced configuration settings for the organization.
         * @param setting  Name of the configuration setting.
         */
        getAdvancedConfigSetting(setting: "MaxChildIncidentNumber" | "MaxIncidentMergeNumber"): number;

        /**
         * Gets client's base URL for Dynamics CRM
         *
         * @return The client's base URL
         *
         * @remarks For Dynamics CRM On-Premises:               http(s)://server/org
         *          For Dynamics CRM Online:                    https://org.crm.dynamics.com
         *          For Dynamics CRM for Outlook (Offline):     http://localhost:2525
         */
        getClientUrl(): string;

        /**
         * Returns the name of the current business app in Customer Engagement.
         */
        getCurrentAppName(): Async.PromiseLike<string>;

        /**
         * Returns the properties of the current business app in Customer Engagement.
         */
        getCurrentAppProperties(): Async.PromiseLike<AppProperties>;

        /**
         * Gets current styling theme.
         *
         * @return The name of the current theme, as either "default", "Office12Blue", or "Office14Silver"
         *
         * @remarks This function does not work with Dynamics CRM for tablets.
         */
        getCurrentTheme(): Theme;

        /**
         * Gets whether automatic save is enabled.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @return true if automatic saving is enabled, otherwise false.
         */
        getIsAutoSaveEnabled(): boolean;

        /**
         * Gets organization's LCID (language code).
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @return The organization language code.
         *
         * @see  {@link http://msdn.microsoft.com/en-us/library/ms912047(WinEmbedded.10).aspx|Microsoft Locale ID Values}
         */
        getOrgLcid(): number;

        /**
         * Gets organization's unique name.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @return The organization's unique name.
         *
         * @remarks This value can be found on the Developer Resources page within Dynamics CRM
         */
        getOrgUniqueName(): string;

        /**
         * Gets query string parameters.
         *
         * @return The query string parameters, in a dictionary object representing name and value pairs.
         * @deprecated: Deprecated in v9 (Still applicable in Web Client). See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         */
        getQueryStringParameters(): { [index: string]: any };

        /**
         * Returns the difference between the local time and Coordinated Universal Time (UTC).
         *
         * @return The time zone offset, in minutes.
         */
        getTimeZoneOffsetMinutes(): number;

        /**
         * Gets user's unique identifier.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @return The user's identifier in Guid format.
         *
         * @remarks Example: "{B05EC7CE-5D51-DF11-97E0-00155DB232D0}"
         */
        getUserId(): string;

        /**
         * Gets user's LCID (language code).
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @return The user's language code.
         *
         * @see  {@link http://msdn.microsoft.com/en-us/library/ms912047(WinEmbedded.10).aspx|Microsoft Locale ID Values}
         */
        getUserLcid(): number;

        /**
         * Gets the name of the current user.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @return The user's name.
         */
        getUserName(): string;

        /**
         * Gets all user security roles.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @return An array of user role identifiers, in Guid format.
         *
         * @remarks Example: ["cf4cc7ce-5d51-df11-97e0-00155db232d0"]
         */
        getUserRoles(): string[];

        /**
         * Returns the version number of the Dynamics 365 server.
         *
         * @return The version number
         */
        getVersion(): string;

        /**
         * Returns a boolean value indicating if the Customer Engagement instance is hosted on- premises or online.
         */
        isOnPremise(): boolean;

        /**
         * Prefixes the current organization's unique name to a string; typically a URL path.
         *
         * @param sPath Local pathname of the resource.
         * @return A path string with the organization name.
         *
         * @remarks Format: "/"+ OrgName + sPath
         */
        prependOrgName(sPath: string): string;
    }

    /**
     * Defines save options to control how appointment, recurring appointment, or service activity records are processed.
     *
     * @see {@link https://msdn.microsoft.com/en-us/library/dn481607.aspx#Anchor_2} for details.
     */
    interface SaveOptions {
        /**
         * Indicates whether to use the Book or Reschedule messages rather than the Create or Update messages.
         * Applicable to appointment, recurring appointment, or service activity records.
         */
        UseSchedulingEngine?: boolean;
    }

    /**
     * Interface for the Xrm.Page.data object.
     */
    interface Data {
        /**
         * Asynchronously refreshes data on the form, without reloading the page.
         *
         * @param save true to save the record, after the refresh.
         * @return Returns an asynchronous promise.
         */
        refresh(save: boolean): Async.PromiseLike<undefined>;

        /**
         * Asynchronously saves the record.
         *
         * @return Returns an asynchronous promise.
         */
        save(): Async.PromiseLike<undefined>;

        /**
         * Asynchronously saves the record  with the option to set callback functions to be executed after the save operation is completed.
         *
         * @param saveOptions Options to control how appointment, recurring appointment, or service activity records are processed.
         * @return Returns an asynchronous promise.
         */
        save(saveOptions: SaveOptions): Async.PromiseLike<undefined>;

        /**
         * Collection of non-entity data on the form.
         * Items in this collection are of the same type as the attributes collection, but they are not attributes of the form entity.
         * In V9 this is only available in the Unified Client
         */
        attributes: Collection.ItemCollection<Page.Attribute>;

        /**
         * The record context of the form.
         */
        entity: Page.Entity;

        /**
         * The process API for Xrm.Page.data.
         * @remarks This member may be undefined when Process Flows are not used by the current entity.
         */
        process: Page.data.ProcessManager;
    }

    /**
     * Interface for Page context
     */
    interface Page {
        /**
         * Provides methods to retrieve information specific to an organization, a user, or parameters passed to a page.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         */
        context: Context;

        /**
         * Provides methods to work with the form.
         */
        data: Data;

        /**
         * Contains properties and methods to retrieve information about the user interface as well as collections for several subcomponents of the form.
         */
        ui: Ui;

        /**
         * Gets all attributes.
         *
         * @return An array of attributes.
         */
        getAttribute(): Page.Attribute[];

        /**
         * Gets an attribute matching attributeName.
         *
         * @tparam T   An Attribute type.
         * @param attributeName Name of the attribute.
         * @return The attribute.
         */
        getAttribute<T extends Page.Attribute>(attributeName: string): T;

        /**
         * Gets an attribute matching attributeName.
         *
         * @param attributeName Name of the attribute.
         * @return The attribute.
         */
        getAttribute(attributeName: string): Page.Attribute;

        /**
         * Gets an attribute by index.
         *
         * @param index The attribute index.
         * @return The attribute.
         */
        getAttribute(index: number): Page.Attribute;

        /**
         * Gets an attribute.
         *
         * @param delegateFunction A matching delegate function
         * @return An array of attribute.
         */
        getAttribute(delegateFunction: Collection.MatchingDelegate<Page.Attribute>): Page.Attribute[];

        /**
         * Gets all controls.
         *
         * @return An array of controls.
         */
        getControl(): Page.Control[];

        /**
         * Gets a control matching controlName.
         *
         * @param T A Control type
         * @param controlName Name of the control.
         *
         * @return The control.
         */
        getControl<T extends Page.Control>(controlName: string): T;

        /**
         * Gets a control matching controlName.
         *
         * @param controlName Name of the control.
         * @return The control.
         */
        getControl(controlName: string): Page.Control;

        /**
         * Gets a control by index.
         *
         * @param T A Control type
         * @param index The control index.
         *
         * @return The control.
         */
        getControl<T extends Page.Control>(index: number): T;

        /**
         * Gets a control by index.
         *
         * @param index The control index.
         * @return The control.
         */
        getControl(index: number): Page.Control;

        /**
         * Gets a control.
         *
         * @param delegateFunction A matching delegate function.
         * @return An array of control.
         */
        getControl(delegateFunction: Collection.MatchingDelegate<Page.Control>): Page.Control[];
    }

    /**
     * Interface for the Xrm.Page.ui object.
     */
    interface Ui {
        /**
         * Displays a form level notification. Any number of notifications can be displayed and will remain until removed using clearFormNotification.
         * The height of the notification area is limited so each new message will be added to the top.
         *
         * @param message The text of the notification message.
         * @param level The level of the notification which defines how the message will be displayed, such as the icon.
         * @param uniqueId Unique identifier for the notification which is used with clearFormNotification to remove the notification.
         *
         * @return true if it succeeds, otherwise false.
         *
         * @remarks     Values for level are:    ERROR   Notification will use the system error icon.
         *                                       WARNING Notification will use the system warning icon.
         *                                       INFO    Notification will use the system info icon.
         */
        setFormNotification(message: string, level: Page.ui.FormNotificationLevel, uniqueId: string): boolean;

        /**
         * Clears the form notification described by uniqueId.
         *
         * @param uniqueId Unique identifier.
         * @return True if it succeeds, otherwise false.
         */
        clearFormNotification(uniqueId: string): boolean;

        /**
         * Closes the form.
         */
        close(): void;

        /**
         * Gets form type.
         *
         * @return The form type.
         *
         * @remarks     Values returned are: 0  Undefined
         *                                   1  Create
         *                                   2  Update
         *                                   3  Read Only
         *                                   4  Disabled
         *                                   6  Bulk Edit
         *              Deprecated values are 5 (Quick Create), and 11 (Read Optimized)
         */
        getFormType(): XrmEnum.FormType;

        /**
         * Gets view port height.
         *
         * @return The view port height, in pixels.
         *
         * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
         */
        getViewPortHeight(): number;

        /**
         * Gets view port width.
         *
         * @return The view port width, in pixels.
         *
         * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
         */
        getViewPortWidth(): number;

        /**
         * Re-evaluates the ribbon's configured EnableRules.
         *
         * @remarks This method does not work with Microsoft Dynamics CRM for tablets.
         */
        refreshRibbon(): void;

        /**
         * The business process flow API, used to interact with the business process flow control in a form.
         */
        process: Page.ui.ProcessManager;

        /**
         * A reference to the collection of controls on the form.
         */
        controls: Collection.ItemCollection<Page.Control>;

        /**
         * The form selector API.
         *
         * @remarks This API does not exist with Microsoft Dynamics CRM for tablets.
         */
        formSelector: Page.FormSelector;

        /**
         * The navigation API.
         *
         * @remarks This API does not exist with Microsoft Dynamics CRM for tablets.
         */
        navigation: Page.Navigation;

        /**
         * A reference to the collection of tabs on the form.
         */
        tabs: Collection.ItemCollection<Page.Tab>;

        /**
         * A collection of all the quick view controls on a form using the new form rendering engine (also called "turbo forms").
         */
        quickForms: Collection.ItemCollection<Page.ui.QuickForm>;
    }

    /**
     * Interface for options used in Xrm.Utility.lookupObjects
     */
    interface LookupOptions {
        /**
         * Indicates whether the lookup allows more than one item to be selected.
         */
        allowMultiSelect?: boolean;
        /**
         * The default entity type to use.
         */
        defaultEntityType?: string;
        /**
         * The default view to use.
         */
        defaultViewId?: string;
        /**
         * The entity types to display.
         */
        entityTypes?: string[];
        /**
         * Indicates whether the lookup control should show the barcode scanner in mobile clients.
         */
        showBarcodeScanner?: boolean;
        /**
         * The views to be available in the view picker.Only system views are supported.
         */
        viewIds?: string[];
    }

    /**
     * Interface for the Xrm.Utility API
     */
    interface Utility {
        /**
         * Closes a progress dialog box.
         */
        closeProgressIndicator(): void;

        /**
         * Returns the valid state transitions for the specified entity type and state code.
         * TODO: No info on the return type is available
         * @param entityName The logical name of the entity.
         * @param stateCode The state code to find out the allowed status transition values.
         */
        getAllowedStatusTransitions(entityName: string, stateCode: number): Async.PromiseLike<any>;

        /**
         * Returns the entity metadata for the specified entity.
         * @param entityName The logical name of the entity.
         * @param attributes The attributes to get metadata for.
         */
        getEntityMetadata(entityName: string, attributes?: string[]): Async.PromiseLike<Metadata.EntityMetadata>;

        /**
         * The method provides access to the global context without going through the form context.
         */
        getGlobalContext(): Context;

        /**
         * Returns the localized string for a given key associated with the specified web resource.
         * @param webResourceName The name of the web resource.
         * @param key The key for the localized string.
         * @returns A localized string.
         */
        getResourceString(webResourceName: string, key: string): string;

        /**
         * Invokes an action based on the specified parameters
         * @param name Name of the process action to invoke.
         * @param parameters An object containing input parameters for the action. You define an object using key:value pairs of items, where key is of String type.
         */
        invokeProcessAction(name: string, parameters: Collection.Dictionary<any>): Async.PromiseLike<any>;

        /**
         * Opens a lookup control to select one or more items.
         * @param lookupOptions Defines the options for opening the lookup dialog
         */
        lookupObjects(lookupOptions: LookupOptions): Async.PromiseLike<Page.LookupValue>;

        /**
         * Refreshes the parent grid containing the specified record.
         */
        refreshParentGrid(lookupOptions: Page.LookupValue): void;

        /**
         * Displays a progress dialog with the specified message.
         * Any subsequent call to this method will update the displayed message in the existing progress dialog with the message specified in the latest method call.
         * @param message The message to be displayed in the progress dialog.
         */
        showProgressIndicator(message: string): void;

        /**
         * Displays an alert dialog, with an "OK" button.
         * @deprecated: Deprecated in v9. Use Xrm.Navigation. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         *
         * @param message The message.
         * @param onCloseCallback The "OK" callback.
         */
        alertDialog(message: string, onCloseCallback: () => void): void;

        /**
         * Displays a confirmation dialog, with "OK" and "Cancel" buttons.
         * @deprecated: Deprecated in v9. Use Xrm.Navigation. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         *
         * @param message The message.
         * @param yesCloseCallback The "OK" callback.
         * @param noCloseCallback The "Cancel" callback.
         */
        confirmDialog(message: string, yesCloseCallback: () => void, noCloseCallback: () => void): void;

        /**
         * Query if 'entityType' is an Activity entity.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @param entityType  Type of the entity.
         *
         * @return true if the entity is an Activity, false if not.
         */
        isActivityType(entityType: string): boolean;

        /**
         * Opens quick create.
         * @deprecated: Deprecated in v9. Use Xrm.Navigation. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @param entityLogicalName The logical name of the entity to create.
         * @param createFromEntity (Optional) Designates a record that will provide default values
         *                         based on mapped attribute values.
         * @param parameters (Optional) A dictionary object that passes extra query string
         *                   parameters to the form. Invalid query string parameters will cause an
         *                   error.
         * @return Returns an asynchronous promise.
         */
        openQuickCreate(entityLogicalName: string, createFromEntity?: Page.LookupValue, parameters?: Utility.OpenParameters):
            Async.PromiseLike<Async.OpenQuickCreateSuccessCallbackObject>;

        /**
         * Opens an entity form.
         * @deprecated: Deprecated in v9. Use Xrm.Navigation. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @param name The entity's logical name.
         * @param id (Optional) The unique identifier for the record.
         * @param parameters (Optional) A dictionary object that passes extra query string parameters to the form.
         * @param windowOptions (Optional) Options for controlling the window.
         */
        openEntityForm(name: string, id?: string, parameters?: Utility.FormOpenParameters, windowOptions?: Utility.WindowOptions): void;

        /**
         * Opens an HTML Web Resource in a new browser window.
         * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
         * @param webResourceName Name of the HTML web resource. Can be used to pass URL
         *                        parameters.  See Remarks.
         * @param webResourceData (Optional) Data to pass into the Web Resource's data parameter.
         *                        It is advised to use encodeURIcomponent() to encode the value.
         * @param width (Optional) The width of the new window.
         * @param height (Optional) The height of the new window.
         *
         * @return A Window reference, containing the opened Web Resource.
         *
         * @remarks This function will not work with Microsoft Dynamics CRM for tablets.
         *          Valid WebResource URL Parameters:   typename
         *                                              type
         *                                              id
         *                                              orgname
         *                                              userlcid
         *                                              data (identical to this method's webResourceData parameter)
         *                                              formid
         */
        openWebResource(webResourceName: string, webResourceData?: string, width?: number, height?: number): Window;
    }

    /**
     * Interface for methods to create and manage records in the mobile clients (for phones tablets).
     */
    interface Mobile {
        /**
         * Provides methods to create and manage records in the mobile clients while working in the offline mode.
         *
         * @see {@link https://msdn.microsoft.com/en-us/library/mt787123.aspx} for details.
         */
        offline: MobileOffline;
    }

    /**
     * Interface for the Mobile.offline methods to create and manage records in the mobile clients while working in the offline mode.
     *
     * @see {@link https://msdn.microsoft.com/en-us/library/mt787123.aspx} for details.
     */
    interface MobileOffline {
        /**
         * Returns whether an entity is offline enabled.
         *
         * @param entityType The logical name of the entity.
         * @return True if the entity is offline enabled; otherwise False.
         */
        isOfflineEnabled(entityType: string): boolean;

        /**
         * Creates an entity record in mobile clients while working in the offline mode.
         *
         * @param entityType The logical name of the entity.
         * @param data A dictionary object containing key : value pairs for the record to create.
         *
         * @return Returns an asynchronous promise.
         *
         * @remarks  You cannot create intersect and activity party entities.
         *           Only the following attribute types are supported in offline mode:
         *             BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName
         *             Integer, Lookup, Memo, Money, Owner, Picklist, String, State
         *             Status, UniqueIdentifier
         */
        createRecord(entityType: string, data: { [attributeName: string]: any }): Async.PromiseLike<Async.OfflineOperationSuccessCallbackObject>;

        /**
         * Retrieves an entity record in mobile clients while working in the offline mode.
         *
         * @param entityType The logical name of the entity.
         * @param id GUID of the record to retrieve.
         * @param options (Optional) OData system query options to retrieve your data. Supports $select and $expand
         *                 Example: ?$select=name&$expand=primarycontactid($select=contactid,fullname)
         *
         * @return Returns an asynchronous promise.
         *
         * @remarks  Only $select option can be specified within $expand.
         *           Only the following attribute types are supported in offline mode:
         *             BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName
         *             Integer, Lookup, Memo, Money, Owner, Picklist, String, State
         *             Status, UniqueIdentifier
         */
        retrieveRecord(entityType: string, id: string, options: string): Async.PromiseLike<Async.OfflineOperationSuccessCallbackObject>;

        /**
         * Retrieves a collection of entity records in mobile clients while working in the offline mode.
         *
         * @param entityType The logical name of the entity.
         * @param options (Optional) The logical name of the enti
         * @param maxPageSize (Optional) A positive number to indicates the number of entity records to be returned per page.
         *                    If you do not specify this parameter, the default value is passed as 5000.
         *                    If the number of records being retrieved is more than maxPageSize, an @odata.nextLink property
         *                    will be returned, and you can use the value of the @odata.nextLink property with a new GET
         *                    request to return next set of records.
         *
         * @return Returns an asynchronous promise.
         *
         * @remarks  A maximum of 5000 related records can be retrieved when using $expand.
         *           Only $select option can be specified within $expand.
         *           $skip query option is not supported.
         *           Only the following attribute types are supported in offline mode:
         *             BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName
         *             Integer, Lookup, Memo, Money, Owner, Picklist, String, State
         *             Status, UniqueIdentifier
         */
        retrieveMultipleRecords(entityType: string, options: string, maxPageSize: number): Async.PromiseLike<Array<{ [key: string]: any }>>;

        /**
         * Updates an entity record in mobile clients while working in the offline mode.
         *
         * @param entityType The logical name of the entity.
         * @param id GUID of the record to update.
         * @param data A dictionary object containing key : value pairs for the record to update.
         *
         * @return Returns an asynchronous promise.
         *
         * @remarks  You cannot update intersect and activity party entities.
         *           Only the following attribute types are supported in offline mode:
         *             BigInt, Boolean, Customer, DateTime, Decimal, Double, EntityName
         *             Integer, Lookup, Memo, Money, Owner, Picklist, String, State
         *             Status, UniqueIdentifier
         */
        updateRecord(entityType: string, id: string, data: { [attributeName: string]: any }): Async.PromiseLike<Async.OfflineOperationSuccessCallbackObject>;

        /**
         * Deletes an entity record in mobile clients while working in the offline mode.
         *
         * @param entityType The logical name of the entity.
         * @param id GUID of the record to delete.
         *
         * @return Returns an asynchronous promise.
         *
         * @remarks  You cannot delete intersect and activity party entities.
         */
        deleteRecord(entityType: string, id: string): Async.PromiseLike<Async.OfflineOperationSuccessCallbackObject>;
    }

    /**
     * Interface for the Xrm.Panel API
     */
    interface Panel {
        /**
         * Displays the web page represented by a URL in the static area in the side pane, which appears on all pages in the web client.
         *
         * @param url URL of the page to be loaded in the side pane static area.
         * @param title Title of the side pane static area.
         *
         * @remarks  This method is only supported for the web client.
         */
        LoadPanel(url: string, title: string): void;
    }

    /**
     *  A definition module for asynchronous interface declarations.
     */
    namespace Async {
        /**
         * Object passed to ErrorCallbackDelegate.
         */
        interface ErrorCallbackObject {
            /**
             * The error code.
             */
            errorCode: number;

            /**
             * An error message describing the issue.
             */
            message: string;
        }

        /**
         * Object passed to QuickCreateSuccessCallbackDelegate.
         */
        interface OpenQuickCreateSuccessCallbackObject {
            /**
             * A lookup value which identifies the record which has been created.
             */
            savedEntityReference: Page.LookupValue;
        }

        /**
         * Object passed to OfflineOperationSuccessCallbackDelegate;
         */
        interface OfflineOperationSuccessCallbackObject {
            /**
             * GUID of the record;
             */
            id: string;

            /**
             * Logical name of the entity.
             */
            logicalName: string;
        }

        /**
         * Object passed to OfflineErrorCallbackDelegate.
         */
        interface OfflineErrorCallbackObject extends ErrorCallbackObject {
            /**
             * An internal error message that might contain additional details about the issue.
             */
            debugMessage: string;
        }

        /**
         * Interface for asynchronous promises. Based on JQuery Promise
         */
        interface PromiseLike<T> {
            /**
             * Attaches callbacks for the resolution and/or rejection of the Promise.
             * @param onfulfilled The callback to execute when the Promise is resolved.
             * @param onrejected The callback to execute when the Promise is rejected.
             * @returns A Promise for the completion of which ever callback is executed.
             */
            then<U>(onFulfilled?: (value: T) => U | PromiseLike<U>, onRejected?: (error: any) => U | PromiseLike<U>): PromiseLike<U>;
            then<U>(onFulfilled?: (value: T) => U | PromiseLike<U>, onRejected?: (error: any) => void): PromiseLike<U>;

            /**
             * UNDOCUMENTED (Web Client only) Add handlers to be called when the Deferred object is rejected.
             */
            fail<U>(onRejected?: (reason: ErrorResponse) => U | PromiseLike<U>): PromiseLike<U>;

            /**
             * UNDOCUMENTED (Web Client only): Add handlers to be called when the Deferred object is either resolved or rejected.
             */
            always<U>(alwaysCallback: (() => U | PromiseLike<U>)): PromiseLike<U>;

            /**
             * UNDOCUMENTED (Unified Client only): Add handlers to be called when the Deferred object is rejected.
             */
            catch<U>(onRejected?: (reason: ErrorResponse) => U | PromiseLike<U>): PromiseLike<U>;

            /**
             * UNDOCUMENTED (Unified Client only): Add handlers to be called when the Deferred object is either resolved or rejected.
             */
            finally<U>(finallyCallback: (() => U | PromiseLike<U>)): PromiseLike<U>;
        }
    }

    /**
     * A definition module for collection interface declarations.
     */
    namespace Collection {
        /**
         * Called for each item in an array
         *
         * @param item The item.
         * @param index Zero-based index of the item array.
         *
         * @return true if the item matches, false if it does not.
         */
        type MatchingDelegate<T> = (item: T, index?: number) => boolean;

        /**
         * Called for each item in an array
         *
         * @param item The item.
         * @param index Zero-based index of the item array.
         */
        type IterativeDelegate<T> = (item: T, index?: number) => void;

        /**
         * Interface for an item collection.
         *
         * @param T Generic type parameter.
         */
        interface Dictionary<T> {
            [key: string]: T;
            [index: number]: T;
        }

        type ItemCollection<T> = Dictionary<T> & {
            /**
             * Applies an operation to all items in this collection.
             *
             * @param delegate An iterative delegate function
             */
            forEach(delegate: IterativeDelegate<T>): void;

            /**
             * Gets the item using a delegate matching function
             *
             * @param delegate A matching delegate function
             *
             * @return A T[] whose members have been validated by delegate.
             */
            get(delegate: MatchingDelegate<T>): T[];

            /**
             * Gets the item given by the index.
             *
             * @param itemNumber The item number to get.
             *
             * @return The T in the itemNumber-th place.
             */
            get(itemNumber: number): T;

            /**
             * Gets the item given by the index.
             *
             * @param itemNumber The item number to get.
             *
             * @return The T in the itemNumber-th place.
             *
             * @see {@link Xrm.Page.Control.getName()} for Control-naming schemes.
             */
            get<TSubType extends T>(itemNumber: number): TSubType;

            /**
             * Gets the item given by the key.
             *
             * @param itemName The item name to get.
             *
             * @return The T matching the key itemName.
             *
             * @see {@link Xrm.Page.Control.getName()} for Control-naming schemes.
             */
            get(itemName: string): T;

            /**
             * Gets the item given by the key.
             *
             * @param itemName The item name to get.
             *
             * @return The T matching the key itemName.
             *
             * @see {@link Xrm.Page.Control.getName()} for Control-naming schemes.
             */
            get<TSubType extends T>(attributeName: string): TSubType;

            /**
             * Gets the entire array of T.
             *
             * @return A T[].
             */
            get(): T[];

            /**
             * Gets the length of the collection.
             *
             * @return The length.
             */
            getLength(): number;
        };
    }

    /**
     * The Xrm.Page API
     *
     * @see {@link http://msdn.microsoft.com/en-us/library/gg328255.aspx|Documentation} for details.
     */
    namespace Page {
        /**
         * Requirement Level for Xrm.Page.Attribute.getRequiredLevel() and Xrm.Page.Attribute.setRequiredLevel().
         */
        type RequirementLevel = "none" | "recommended" | "required";

        /**
         * Save Modes for Xrm.Page.Entity.save().
         */
        type SaveMode = "saveandclose" | "saveandnew";

        /**
         * Status for Xrm.Page.Stage.getStatus().
         */
        type StageStatus = "active" | "inactive";

        /**
         * Status for Xrm.Page.Process.getStatus().
         */
        type ProcessStatus = "active" | "aborted" | "finished";

        /**
         * Submit Mode for Xrm.Page.Attribute.getSubmitMode() and Xrm.Page.Attribute.setSubmitMode().
         */
        type SubmitMode = "always" | "dirty" | "never";

        /**
         * Control type for Xrm.Page.ui.QuickForm.getControlType().
         */
        type ControlQuickFormType = "quickform";

        /**
         * Control types for Xrm.Page.Control.getControlType().
         */
        type ControlType = "standard" | "iframe" | "lookup" | "optionset" | "subgrid" | "webresource" | "notes" | "timercontrol" | "kbsearch" | "timelinewall" | ControlQuickFormType;

        /**
         * Date attribute formats for Xrm.Page.Attribute.getFormat(), used by DateAttribute.
         */
        type DateAttributeFormat = "date" | "datetime";

        /**
         * Integer attribute formats for Xrm.Page.Attribute.getFormat(), used by NumberAttribute.
         */
        type IntegerAttributeFormat = "duration" | "none";

        /**
         * OptionSet attribute formats for Xrm.Page.Attribute.getFormat(), used by OptionSetAttribute.
         */
        type OptionSetAttributeFormat = "language" | "timezone";

        /**
         * String attribute formats for Xrm.Page.Attribute.getFormat(), used by StringAttribute.
         */
        type StringAttributeFormat = "email" | "phone" | "text" | "textarea" | "tickersymbol" | "url";

        /**
         * Attribute types for Xrm.ui.ProcessMonitor Xrm.Page.Attribute.setDisplayState().
         */
        type AttributeType = "boolean" | "datetime" | "decimal" | "double" | "integer" | "lookup" | "memo" | "money" | "optionset" | "string";

        /**
         * Direction types for a process stage change event
         */
        type StageChangeDirection = "Next" | "Previous";

        /**
         * Attribute formats for Xrm.Page.Attribute.getFormat().
         */
        type AttributeFormat = DateAttributeFormat | IntegerAttributeFormat | OptionSetAttributeFormat | StringAttributeFormat;

        /**
         * Interface for a CRM Business Process Flow instance.
         */
        interface Process {
            /**
             * Returns the unique identifier of the process.
             *
             * @return The identifier for this process, in GUID format.
             *
             * @remarks  Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
             */
            getId(): string;

            /**
             * Returns the name of the process.
             *
             * @return The name.
             */
            getName(): string;

            /**
             * Returns an collection of stages in the process.
             *
             * @return The stages.
             */
            getStages(): Collection.ItemCollection<Stage>;

            /**
             * Returns a boolean value to indicate if the process is rendered.
             *
             * @return true if the process is rendered, false if not.
             */
            isRendered(): boolean;
        }

        /**
         * Interface for CRM Business Process Flow stages.
         */
        interface Stage {
            /**
             * Returns an object with a getValue method which will return the integer value of the business process flow
             * category.
             *
             * @return The stage category.
             */
            getCategory(): { getValue(): XrmEnum.StageCategory };

            /**
             * Returns the logical name of the entity associated with the stage.
             *
             * @return The entity name.
             */
            getEntityName(): string;

            /**
             * Returns the unique identifier of the stage.
             *
             * @return The identifier of the Stage, in GUID format.
             *
             * @remarks  Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
             */
            getId(): string;

            /**
             * Returns the name of the stage.
             *
             * @return The name.
             */
            getName(): string;

            /**
             * Returns the status of the stage.
             *
             * @return The status.
             *
             * @remarks  This method will return either "active" or "inactive".
             */
            getStatus(): StageStatus;

            /**
             * Returns a collection of steps in the stage.
             *
             * @return An array of Step.
             */
            getSteps(): Step[];
        }

        interface Step {
            /**
             * Returns the logical name of the attribute associated to the step.
             *
             * @return The attribute.
             *
             * @remarks  Some steps don’t contain an attribute value.
             */
            getAttribute(): string;

            /**
             * Returns the name of the step.
             *
             * @return The name.
             */
            getName(): string;

            /**
             * Returns whether the step is required in the business process flow.
             *
             * @return true if required, false if not.
             *
             * @remarks     Returns true if the step is marked as required in the Business Process Flow editor; otherwise, false.
             *              There is no connection between this value and the values you can change in the Xrm.Page.data.entity
             *              attribute RequiredLevel methods.
             */
            isRequired(): boolean;
        }

        /**
         * Interface for the event context.
         */
        interface EventContext {
            /**
             * Gets the Xrm context.
             *
             * @return The Xrm context.
             */
            getContext(): Context;

            /**
             * Gets the handler's depth, which is the order in which the handler is executed.
             *
             * @return The depth, a 0-based index.
             */
            getDepth(): number;

            /**
             * Gets a reference to the object for which event occurred.
             *
             * @return The event source.
             */
            getEventSource(): Attribute | Control | Entity;

            /**
             * Gets a reference to the currnet form context
             *
             * @return  The form context
             */
            getFormContext(): Page;

            /**
             * Gets the shared variable with the specified key.
             *
             * @param T Generic type parameter.
             * @param key The key.
             *
             * @return The shared variable.
             *
             * @remarks Used to pass values between handlers of an event.
             */
            getSharedVariable<T>(key: string): T;

            /**
             * Sets a shared variable.
             *
             * @param T Generic type parameter.
             * @param key The key.
             * @param value The value.
             *
             * @remarks Used to pass values between handlers of an event.
             */
            setSharedVariable<T>(key: string, value: T): void;
        }

        /**
         * Interface for a save event context
         */
        interface SaveEventContext extends EventContext {
            /**
             * Gets save-event arguments.
             *
             * @return The event arguments.
             *
             * @remarks Returns null for all but the "save" event.
             */
            getEventArgs(): SaveEventArguments;
        }

        /**
         * Interface for a process stage change event context
         */
        interface StageChangeEventContext extends EventContext {
            /**
             * Gets process stage change event arguments.
             *
             * @return The event arguments.
             *
             */
            getEventArgs(): StageChangeEventArguments;
        }

        interface StageSelectedEventContext extends EventContext {
            /**
             * Gets process stage selected event arguments.
             *
             * @return The event arguments.
             *
             */
            getEventArgs(): StageSelectedEventArguments;
        }

        /**
         * Type for a context-sensitive handler.
         * @param context The context.
         */
        type ContextSensitiveHandler = (context: EventContext) => void;

        /**
         * Type for a process status change handler.
         * @param status The process status.
         */
        type ProcessStatusChangeHandler = (status: ProcessStatus) => void;

        /**
         * Interface for UI elements with labels.
         */
        interface UiLabelElement {
            /**
             * Gets the label.
             *
             * @return The label.
             */
            getLabel(): string;

            /**
             * Sets the label.
             *
             * @param label The label.
             */
            setLabel(label: string): void;
        }

        /**
         * Interface for UI elements which can have the visibility value read.
         */
        interface UiCanGetVisibleElement {
            /**
             * Gets the visibility state.
             *
             * @return true if the tab is visible, otherwise false.
             */
            getVisible(): boolean;
        }

        /**
         * Interface for UI elements which can have the visibility value updated.
         */
        interface UiCanSetVisibleElement {
            /**
             * Sets the visibility state.
             *
             * @param visible true to show, false to hide.
             */
            setVisible(visible: boolean): void;
        }

        /**
         * Base interface for standard UI elements.
         */
        interface UiStandardElement extends UiCanGetVisibleElement, UiLabelElement {
            /**
             * Sets the visibility state.
             *
             * @param visible true to show, false to hide.
             */
            setVisible(visible: boolean): void;
        }

        /**
         * Interface for focusable UI elements.
         */
        interface UiFocusable {
            /**
             * Sets focus on the element.
             */
            setFocus(): void;
        }

        /**
         * Interface for controls which methods provide immediate feedback or take actions as user types in a control.
         * Contains methods which can be used to perform data validations in a control even before the user commits (saves) the value in a form.
         */
        interface UiKeyPressable {
            /**
             * Use this to add a function as an event handler for the keypress event so that the function is called when you type a character in the specific text or number field.
             * For a sample JavaScript code that uses the addOnKeyPress method to configure the auto-completion experience, see Sample: Auto-complete in CRM controls.
             * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
             * @param handler The function reference.
             */
            addOnKeyPress(handler: ContextSensitiveHandler): void;

            /**
             * Use this to manually fire an event handler that you created for a specific text or number field to be executed on the keypress event.
             */
            fireOnKeyPress(): void;

            /**
             * Use this to remove an event handler for a text or number field that you added using addOnKeyPress.
             * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
             * Remarks:  If an anonymous function is set using addOnKeyPress, it can’t be removed using this method.
             * @param handler The function reference.
             */
            removeOnKeyPress(handler: ContextSensitiveHandler): void;
        }

        /**
         * Interface for Result value of AutoCompleteResultSet
         */
        interface AutoCompleteResult {
            /**
             * The Identifier
             */
            id: string | number;

            /**
             * Url of the icon to display
             */
            icon?: string;

            /**
             * Display value(s) for this auto-complete option
             */
            fields: string[];
        }

        /**
         * Interface for command of AutoCompleteResultSet.  This is displayed at the bottom of the auto complete view
         */
        interface AutoCompleteCommand {
            /**
             * The Identifier
             */
            id: string;

            /**
             * Url of the icon to display
             */
            icon?: string;

            /**
             * Label to display at the bottom of the auto complete view
             */
            label: string;

            /**
             * Action to perform when user clicks on label
             */
            action(): void;
        }

        /**
         * Interface for showAutoComplete argument
         */
        interface AutoCompleteResultSet {
            /**
             * Results to show
             */
            results: AutoCompleteResult[];

            /**
             * Command to show/execute at the bottom of the results displayed
             */
            commands?: AutoCompleteCommand;
        }

        /**
         * Interface for a Lookup value.
         */
        interface LookupValue {
            /**
             * The identifier.
             */
            id: string;

            /**
             * The name
             */
            name?: string;

            /**
             * Type of the entity.
             */
            entityType: string;
        }

        /**
         * Interface for an OptionSet value.
         */
        interface OptionSetValue {
            /**
             * The label text.
             */
            text: string;

            /**
             * The value, as a number
             */
            value: number;
        }

        /**
         * Interface for a privilege.
         */
        interface Privilege {
            /**
             * True if the user can read.
             */
            canRead: boolean;

            /**
             * True if the user can update.
             */
            canUpdate: boolean;

            /**
             * True if the user can create.
             */
            canCreate: boolean;
        }

        /**
         * Interface for an Entity attribute.
         */
        interface Attribute {
            /**
             * Adds a handler to be called when the attribute's value is changed.
             *
             * @param handler The function reference.
             */
            addOnChange(handler: ContextSensitiveHandler): void;

            /**
             * Fire all "on change" event handlers.
             */
            fireOnChange(): void;

            /**
             * Gets attribute type.
             *
             * @return The attribute's type name.
             *
             * @remarks Values returned are: boolean
             *                               datetime
             *                               decimal
             *                               double
             *                               integer
             *                               lookup
             *                               memo
             *                               money
             *                               optionset
             *                               string
             */
            getAttributeType(): string;

            /**
             * Gets the attribute format.
             *
             * @return The format of the attribute.
             *
             * @see {@link getAttributeType()}
             *
             * @remarks Values returned are: date           (datetime)
             *                               datetime       (datetime)
             *                               duration       (integer)
             *                               email          (string)
             *                               language       (optionset)
             *                               none           (integer)
             *                               phone          (string)
             *                               text           (string)
             *                               textarea       (string)
             *                               tickersymbol   (string)
             *                               timezone       (optionset)
             *                               url            (string)
             */
            getFormat(): AttributeFormat;

            /**
             * Gets a boolean value indicating whether this Attribute has unsaved changes.
             *
             * @return true if there are unsaved changes, otherwise false.
             */
            getIsDirty(): boolean;

            /**
             * Gets the logical name of the attribute.
             *
             * @return The logical name.
             */
            getName(): string;

            /**
             * Gets a reference to the record context of this attribute.
             *
             * @return The parent record context.
             */
            getParent(): Entity;

            /**
             * Gets the current level of requirement for the attribute.
             *
             * @return The required level, as either "none", "required", or "recommended"
             */
            getRequiredLevel(): RequirementLevel;

            /**
             * Gets current submit mode for the attribute.
             *
             * @return The submit mode, as either "always", "never", or "dirty"
             *
             * @remarks The default value is "dirty"
             */
            getSubmitMode(): SubmitMode;

            /**
             * Gets the current user's privileges for the attribute.
             *
             * @return The user privileges.
             */
            getUserPrivilege(): Privilege;

            /**
             * Removes the handler from the "on change" event.
             *
             * @param handler The handler.
             */
            removeOnChange(handler: ContextSensitiveHandler): void;

            /**
             * Sets the required level.
             *
             * @param requirementLevel The requirement level, as either "none", "required", or "recommended"
             */
            setRequiredLevel(requirementLevel: RequirementLevel): void;

            /**
             * Sets the submit mode.
             *
             * @param submitMode The submit mode, as either "always", "never", or "dirty".
             *
             * @remarks The default value is "dirty"
             */
            setSubmitMode(submitMode: SubmitMode): void;

            /**
             * A collection of all the controls on the form that interface with this attribute.
             */
            controls: Collection.ItemCollection<Control>;

            /**
             * Gets the value.
             *
             * @return The value.
             */
            getValue(): any;

            /**
             * Sets the value.
             *
             * @param value The value.
             */
            setValue(value: any): void;
        }

        /**
         * Interface for a Number attribute.
         *
         * @sa  Attribute
         */
        interface NumberAttribute extends Attribute {
            /**
             * Gets the attribute format.
             *
             * @return The format of the attribute.
             *
             * @remarks Values returned are: duration
             *                               none
             */
            getFormat(): IntegerAttributeFormat;

            /**
             * Gets the maximum value allowed.
             *
             * @return The maximum value allowed.
             */
            getMax(): number;

            /**
             * Gets the minimum value allowed.
             *
             * @return The minimum value allowed.
             */
            getMin(): number;

            /**
             * Gets the attribute's configured precision.
             *
             * @return The total number of allowed decimal places.
             */
            getPrecision(): number;

            /**
             * Gets the value.
             *
             * @return The value.
             */
            getValue(): number;

            /**
             * Sets the value.
             *
             * @param value The value.
             *
             * @remarks Attributes on Quick Create Forms will not save values set with this method.
             */
            setValue(value: number): void;

            /**
             * A collection of all the controls on the form that interface with this attribute.
             */
            controls: Collection.ItemCollection<NumberControl>;
        }

        /**
         * Interface for a String attribute.
         *
         * @sa  Attribute
         */
        interface StringAttribute extends Attribute {
            /**
             * Gets the attribute format.
             *
             * @return The format of the attribute.
             *
             * @remarks Values returned are: email
             *                               phone
             *                               text
             *                               textarea
             *                               tickersymbol
             *                               url
             */
            getFormat(): StringAttributeFormat;

            /**
             * Gets maximum length allowed.
             *
             * @return The maximum length allowed.
             *
             * @remarks The email form's "Description" attribute does not have the this method.
             */
            getMaxLength(): number;

            /**
             * Gets the value.
             *
             * @return The value.
             */
            getValue(): string;

            /**
             * Sets the value.
             *
             * @param value The value.
             *
             * @remarks     A String field with the {@link Attribute.getFormat|email} format enforces email
             *              address formatting. Attributes on Quick Create Forms will not save values set
             *              with this method.
             */
            setValue(value: string): void;

            /**
             * A collection of all the controls on the form that interface with this attribute.
             */
            controls: Collection.ItemCollection<StringControl>;
        }

        /**
         * Common interface for enumeration attributes (OptionSet and Boolean).
         *
         * @sa  Attribute
         */
        interface EnumAttribute extends Attribute {
            /**
             * Gets the initial value of the attribute.
             *
             * @return The initial value.
             *
             * @remarks Valid for OptionSet and boolean attribute types
             */
            getInitialValue(): number | boolean;
        }

        /**
         * Interface for a Boolean attribute.
         *
         * @sa  EnumAttribute
         */
        interface BooleanAttribute extends EnumAttribute {
            /**
             * Gets the initial value of the attribute.
             *
             * @return The initial value.
             *
             * @remarks Valid for OptionSet and boolean attribute types
             */
            getInitialValue(): boolean;

            /**
             * Gets the value.
             *
             * @return true if it succeeds, false if it fails.
             */
            getValue(): boolean;

            /**
             * Sets the value.
             *
             * @param value The value.
             *
             * @remarks  Attributes on Quick Create Forms will not save values set with this method.
             */
            setValue(value: boolean): void;
        }

        /**
         * Interface for a Date attribute.
         *
         * @sa  Attribute
         */
        interface DateAttribute extends Attribute {
            /**
             * Gets the attribute format.
             *
             * @return The format of the attribute.
             *
             * @remarks Values returned are: date
             *                               datetime
             */
            getFormat(): DateAttributeFormat;

            /**
             * Gets the value.
             *
             * @return The value.
             */
            getValue(): Date;

            /**
             * Sets the value.
             *
             * @param value The value.
             *
             * @remarks  Attributes on Quick Create Forms will not save values set with this method.
             */
            setValue(value: Date): void;

            /**
             * A collection of all the controls on the form that interface with this attribute.
             */
            controls: Collection.ItemCollection<DateControl>;
        }

        /**
         * Interface an OptionSet attribute.
         *
         * @sa  EnumAttribute
         */
        interface OptionSetAttribute extends EnumAttribute {
            /**
             * Gets the attribute format.
             *
             * @return The format of the attribute.
             *
             * @remarks Values returned are: language
             *                               timezone
             */
            getFormat(): OptionSetAttributeFormat;

            /**
             * Gets the initial value of the attribute.
             *
             * @return The initial value.
             *
             * @remarks Valid for OptionSet and boolean attribute types
             */
            getInitialValue(): number;

            /**
             * Gets the option matching a value.
             *
             * @param value The enumeration value of the option desired.
             *
             * @return The option.
             */
            getOption(value: number): OptionSetValue;

            /**
             * Gets the option matching a label.
             *
             * @param  label The label of the option desired.
             *
             * @return The option.
             */
            getOption(label: string): OptionSetValue;

            /**
             * Gets all of the options.
             *
             * @return An array of options.
             */
            getOptions(): OptionSetValue[];

            /**
             * Gets selected option.
             *
             * @return The selected option.
             */
            getSelectedOption(): OptionSetValue;

            /**
             * Gets the label of the currently selected option.
             *
             * @return The current value's label.
             */
            getText(): string;

            /**
             * Gets the value.
             *
             * @return The value.
             */
            getValue(): number;

            /**
             * Sets the value.
             *
             * @param value The value.
             *
             * @remarks     The getOptions() method returns option values as strings. You must use parseInt
             *              to convert them to numbers before you can use those values to set the value of an
             *              OptionSet attribute. Attributes on Quick Create Forms will not save values set
             *              with this method.
             */
            setValue(value: number): void;

            /**
             * A collection of all the controls on the form that interface with this attribute.
             */
            controls: Collection.ItemCollection<OptionSetControl>;
        }

        /**
         * Interface a Lookup attribute.
         *
         * @sa  Attribute
         */
        interface LookupAttribute extends Attribute {
            /**
             * Gets a boolean value indicating whether the Lookup is a multi-value PartyList.
             *
             * @return true the attribute is a PartyList, otherwise false.
             */
            getIsPartyList(): boolean;

            /**
             * Gets the value.
             *
             * @return An array of LookupValue.
             */
            getValue(): LookupValue[];

            /**
             * Sets the value.
             *
             * @param value The value.
             *
             * @remarks Attributes on Quick Create Forms will not save values set with this method.
             */
            setValue(value: LookupValue[]): void;

            /**
             * A collection of all the controls on the form that interface with this attribute.
             */
            controls: Collection.ItemCollection<LookupControl>;
        }

        /**
         * Interface for the form's record context, Xrm.Page.data.entity
         */
        interface Entity {
            /**
             * Adds a handler to be called when the record is saved.
             *
             * @param handler The handler.
             */
            addOnSave(handler: ContextSensitiveHandler): void;

            /**
             * Gets an serialized-XML string representing data that will be passed to the server upon saving
             * the record.
             *
             * @return The XML in string format.
             *
             * @remarks     This function does not work with Microsoft Dynamics CRM for tablets. Example:
             *              "<account><name>Contoso</name><accountnumber>55555</accountnumber><telephone2>425
             *              555-1234</telephone2></account>".
             */
            getDataXml(): string;

            /**
             * Gets entity's logical name.
             *
             * @return The logical name.
             */
            getEntityName(): string;

            /**
             * Gets the record's unique identifier.
             *
             * @return The identifier, in Guid format.
             *
             * @remarks  Example: "{825CB223-A651-DF11-AA8B-00155DBA3804}".
             */
            getId(): string;

            /**
             * Gets a boolean value indicating whether the record has unsaved changes.
             *
             * @return true if there are unsaved changes, otherwise false.
             */
            getIsDirty(): boolean;

            /**
             * Gets the record's primary attribute value.
             *
             * @return The primary attribute value.
             *
             * @remarks The value for this attribute is used when links to the record are displayed.
             */
            getPrimaryAttributeValue(): string;

            /**
             * Removes the handler from the "on save" event.
             *
             * @param handler The handler.
             */
            removeOnSave(handler: ContextSensitiveHandler): void;

            /**
             * Saves the record.
             * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
             * @remarks  When using quick create forms in the web application the saveandnew option is not
             *           applied. It will always work as if saveandclose were used. Quick create forms in
             *           Microsoft Dynamics CRM for tablets will apply the saveandnew behavior.
             */
            save(): void;

            /**
             * Saves the record with the given save mode.
             * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
             * @param saveMode (Optional) the save mode to save, as either "saveandclose" or
             *                 "saveandnew".
             */
            save(saveMode: SaveMode): void;

            /**
             * The collection of attributes for the record.
             */
            attributes: Collection.ItemCollection<Attribute>;
        }

        /**
         * Interface for save event arguments.
         */
        interface SaveEventArguments {
            /**
             * Gets save mode, as an integer.
             *
             * @return The save mode.
             *
             * @remarks Values returned are: 1      Save
             *                               2      Save and Close
             *                               59     Save and New
             *                               70     AutoSave (Where enabled; can be used with an OnSave handler
             *                                                to conditionally disable auto-saving)
             *                               58     Save as Completed (Activities)
             *                               5      Deactivate
             *                               6      Reactivate
             *                               47     Assign (All user- or team-owned entities)
             *                               7      Send (Email)
             *                               16     Qualify (Lead)
             *                               15     Disqualify (Lead)
             */
            getSaveMode(): XrmEnum.SaveMode;

            /**
             * Returns a boolean value to indicate if the record's save has been prevented.
             *
             * @return true if saving is prevented, otherwise false.
             */
            isDefaultPrevented(): boolean;

            /**
             * Prevents the save operation from being submitted to the server.
             *
             * @remarks All remaining "on save" handlers will continue execution.
             */
            preventDefault(): void;
        }

        /**
         * Interface for process stage change event arguments.
         */
        interface StageChangeEventArguments {
            /**
             * Gets the direction of the stage change.
             *
             * @return The direction.
             *
             * @remarks Values returned are: "next" or "previous"
             */
            getDirection(): StageChangeDirection;

            /**
             * Gets the destination stage object
             *
             * @return The stage object
             *
             * @remarks For switching between entities, returns the previous stage object
             */
            getStage(): Stage;
        }

        /**
         * Interface for process stage selected event arguments.
         */
        interface StageSelectedEventArguments {
            /**
             * Gets the selected stage object
             *
             * @return The stage object
             */
            getStage(): Stage;
        }

        /**
         * Module for the Xrm.Page.data API.
         */
        namespace data {
            /**
             * Interface for the Xrm.Page.data.process API.
             */
            interface ProcessManager {
                /**
                 * Returns a Process object representing the active process.
                 *
                 * @return current active process.
                 */
                getActiveProcess(): Process;

                /**
                 * Set a Process as the active process.
                 *
                 * @param processId The Id of the process to make the active process.
                 * @param callbackFunction (Optional) a function to call when the operation is complete.
                 */
                setActiveProcess(processId: string, callbackFunction?: ProcessCallbackDelegate): void;

                /**
                 * Returns all process instances for the entity record that the calling user has access to.
                 *
                 * @param callbackFunction (Optional) a function to call when the operation is complete.
                 */
                getProcessInstances(callbackFunction: GetProcessInstancesDelegate): void;

                /**
                 * Sets a process instance as the active instance
                 *
                 * @param processInstanceId The Id of the process instance to make the active instance.
                 * @param callbackFunction (Optional) a function to call when the operation is complete.
                 */
                setActiveProcessInstance(processInstanceId: string, callbackFunction: SetProcessInstanceDelegate): void;

                /**
                 * Returns a Stage object representing the active stage.
                 *
                 * @return current active stage.
                 */
                getActiveStage(): Stage;

                /**
                 * Set a stage as the active stage.
                 *
                 * @param stageId the Id of the stage to make the active stage.
                 * @param callbackFunction (Optional) a function to call when the operation is complete.
                 */
                setActiveStage(stageId: string, callbackFunction?: ProcessCallbackDelegate): void;

                /**
                 * Use this method to get a collection of stages currently in the active path with methods to interact with the
                 * stages displayed in the business process flow control. The active path represents stages currently rendered in
                 * the process control based on the branching rules and current data in the record.
                 *
                 * @return A collection of all completed stages, the currently active stage, and the predicted set of future stages
                 *          based on satisfied conditions in the branching rule. This may be a subset of the stages returned with
                 *          Xrm.Page.data.process.getActiveProcess because it will only include those stages which represent a valid
                 *          transition from the current stage based on branching that has occurred in the process.
                 */
                getActivePath(): Collection.ItemCollection<Stage>;

                /**
                 * Use this method to asynchronously retrieve the enabled business process flows that the user can switch to for an
                 * entity.
                 *
                 * @param callbackFunction The callback function must accept a parameter that contains an object with
                 *                         dictionary properties where the name of the property is the Id of the
                 *                         business process flow and the value of the property is the name of the
                 *                         business process flow.
                 *                         The enabled processes are filtered according to the user’s privileges. The
                 *                         list of enabled processes is the same ones a user can see in the UI if they
                 *                         want to change the process manually.
                 */
                getEnabledProcesses(callbackFunction: (enabledProcesses: ProcessDictionary) => void): void;

                /**
                 * Use this method to get the currently selected stage.
                 *
                 * @return The currently selected stage.
                 */
                getSelectedStage(): Stage;

                /**
                 * Use this to add a function as an event handler for the OnStageChange event so that it will be called when the
                 * business process flow stage changes.
                 * @param handler The function will be added to the bottom of the event
                 *                handler pipeline. The execution context is automatically
                 *                set to be the first parameter passed to the event handler.
                 *                Use a reference to a named function rather than an
                 *                anonymous function if you may later want to remove the
                 *                event handler.
                 */
                addOnStageChange(handler: ContextSensitiveHandler): void;

                /**
                 * Use this to add a function as an event handler for the OnProcessStatusChange event so that it will be called when the
                 * business process flow status changes.
                 * @param handler The function will be added to the bottom of the event
                 *                handler pipeline. The execution context is automatically
                 *                set to be the first parameter passed to the event handler.
                 *                Use a reference to a named function rather than an
                 *                anonymous function if you may later want to remove the
                 *                event handler.
                 */
                addOnProcessStatusChange(handler: ProcessStatusChangeHandler): void;

                /**
                 * Use this to add a function as an event handler for the OnStageSelected event so that it will be called
                 * when a business process flow stage is selected.
                 *
                 * @param handler The function will be added to the bottom of the event
                 *                handler pipeline. The execution context is automatically
                 *                set to be the first parameter passed to the event handler.
                 *                Use a reference to a named function rather than an
                 *                anonymous function if you may later want to remove the
                 *                event handler.
                 */
                addOnStageSelected(handler: ContextSensitiveHandler): void;

                /**
                 * Use this to remove a function as an event handler for the OnProcessStatusChange event.
                 *
                 * @param handler If an anonymous function is set using the addOnProcessStatusChange method it
                 *                cannot be removed using this method.
                 */
                removeOnProcessStatusChange(handler: ProcessStatusChangeHandler): void;

                /**
                 * Use this to remove a function as an event handler for the OnStageChange event.
                 *
                 * @param handler If an anonymous function is set using the addOnStageChange method it
                 *                cannot be removed using this method.
                 */
                removeOnStageChange(handler: ContextSensitiveHandler): void;

                /**
                 * Use this to remove a function as an event handler for the OnStageChange event.
                 *
                 * @param handler If an anonymous function is set using the addOnStageChange method it
                 *                cannot be removed using this method.
                 */
                removeOnStageSelected(handler: ContextSensitiveHandler): void;

                /**
                 * Progresses to the next stage.
                 *
                 * @param callbackFunction (Optional) A function to call when the operation is complete.
                 *
                 */
                moveNext(callbackFunction?: ProcessCallbackDelegate): void;

                /**
                 * Moves to the previous stage.
                 *
                 * @param callbackFunction (Optional) A function to call when the operation is complete.
                 *                                                          .
                 */
                movePrevious(callbackFunction?: ProcessCallbackDelegate): void;

                /**
                 * Use this method to get the unique identifier of the process instance
                 *
                 * @return The unique identifier of the process instance
                 */
                getInstanceId(): string;

                /**
                 * Use this method to get the name of the process instance
                 *
                 * @return The name of the process instance
                 */
                getInstanceName(): string;

                /**
                 * Use this method to get the current status of the process instance
                 *
                 * @return The current status of the process
                 */
                getStatus(): ProcessStatus;

                /**
                 * Use this method to set the current status of the process instance
                 *
                 * @param status The new status for the process
                 * @param callbackFunction (Optional) a function to call when the operation is complete.
                 */
                setStatus(status: ProcessStatus, callbackFunction: ProcessSetStatusDelegate): void;
            }

            /**
             * Called when method to get active processes is complete
             *
             * @param status The result of the get active processes operation.
             *
             * @remarks     Returns object with the following key-value pairs:
             *                          CreatedOn
             *                          ProcessDefinitionID
             *                          ProcessDefinitionName
             *                          ProcessInstanceID
             *                          ProcessInstanceName
             *                          StatusCodeName
             */
            type GetProcessInstancesDelegate = (object: ProcessDictionary) => void;

            /**
             * Called when method to set active process is complete
             *
             * @param status The result of the set active process operation.
             *
             * @remarks     Values returned are: success        (The operation succeeded.)
             *                                   invalid        (The processInstanceId isn’t valid or the process isn’t enabled.)
             */
            type SetProcessInstanceDelegate = (status: string) => void;

            /**
             * Called when process change methods have completed.
             *
             * @param status The result of the process change operation.
             *
             * @remarks     Values returned are: success        (The operation succeeded.)
             *                                   crossEntity    (The previous stage is for a different entity.)
             *                                   beginning      (The active stage is the first stage of the active path.)
             *                                   invalid        (The operation failed because the selected stage isn’t the same
             *                                   as the active stage.)
             *                                   unreachable    (The stage exists on a different path.)
             */
            type ProcessCallbackDelegate = (status: string) => void;

            /**
             * Called when process set status method has completed.
             *
             * @param status The new status of the process instance
             *
             * @remarks     Values returned are: active
             *                                   aborted
             *                                   finished
             */
            type ProcessSetStatusDelegate = (status: ProcessStatus) => void;

            /**
             * Represents a key-value pair, where the key is the Process Flow's ID, and the value is the name thereof.
             */
            interface ProcessDictionary { [index: string]: string; }
        }

        /**
         * Interface for Xrm.Page.ui controls.
         *
         * @sa  UiElement
         */
        interface Control extends UiLabelElement, UiCanGetVisibleElement {
            /**
             * Gets the controls type.
             *
             * @return The control type.
             *
             * @remarks Values returned are: standard
             *                               iframe
             *                               lookup
             *                               optionset
             *                               subgrid
             *                               webresource
             *                               notes
             *                               timercontrol
             *                               kbsearch (CRM Online Only, use parature.d.ts)
             *                               quickform (see ui.QuickForm)
             *                               customcontrol: <namespace>.<name> (A custom control for mobile phone and tablet clients).
             *                               customsubgrid: <namespace>.<name> (A custom dataset control for mobile phone and tablet clients).
             */
            getControlType(): ControlType | string;

            /**
             * Gets the name of the control on the form.
             *
             * @return The name of the control.
             *
             * @remarks     The name assigned to a control is not determined until the form loads. Changes to
             *              the form may change the name assigned to a given control.
             *              When you use the control getName method the name of the first control will be the
             *              same as the name of the attribute. The second instance of a control for that
             *              attribute will be "<attributeName>1". The pattern <attributeName>+N
             *              will continue for each additional control added to the form for a specific
             *              attribute. When a form displays a business process flow control in the header,
             *              additional controls will be added for each attribute that is displayed in the
             *              business process flow. These controls have a unique name like the following:
             *              header_process_<attribute name>.
             */
            getName(): string;

            /**
             * Gets a reference to the Section parent of the control.
             *
             * @return The parent Section.
             */
            getParent(): Section;
        }

        /**
         * Interface for a standard control.
         *
         * @sa  Control
         */
        interface StandardControl extends Control, UiStandardElement, UiFocusable {
            /**
             * Clears the notification identified by uniqueId.
             *
             * @param uniqueId (Optional) Unique identifier.
             *
             * @return true if it succeeds, false if it fails.
             *
             * @remarks If the uniqueId parameter is not used, the current notification shown will be removed.
             */
            clearNotification(uniqueId?: string): boolean;

            /**
             * Gets a boolean value, indicating whether the control is disabled.
             *
             * @return true if it is disabled, otherwise false.
             */
            getDisabled(): boolean;

            /**
             * Sets the state of the control to either enabled, or disabled.
             *
             * @param disabled true to disable, false to enable.
             */
            setDisabled(disabled: boolean): void;

            /**
             * Sets a control-local notification message.
             *
             * @param message The message.
             * @param uniqueId Unique identifier.
             *
             * @return true if it succeeds, false if it fails.
             *
             * @remarks     When this method is used on Microsoft Dynamics CRM for tablets a red "X" icon
             *              appears next to the control. Tapping on the icon will display the message.
             */
            setNotification(message: string, uniqueId: string): boolean;

            /**
             * Displays an error or recommendation notification for a control, and lets you specify actions to execute based on the notification.
             */
            addNotification(notification: AddControlNotificationOptions): void;

            /**
             * Gets the control's bound attribute.
             *
             * @tparam T   An Attribute type.
             *
             * @return The attribute.
             */
            getAttribute<T extends Attribute>(): T;

            /**
             * Gets the control's bound attribute.
             *
             * @return The attribute.
             */
            getAttribute(): Attribute;
        }

        /**
         * Interface for Auto Lookup Control.
         * This is not an Entity Lookup, but a control that supports AutoComplete / KeyPress Events (Text or Number)
         *
         * @remarks This interface is not supported for CRM mobile clients (phones or tablets) and the interactive service hub.  It is only available for Updated entities.
         *
         * @sa  StandardControl
         */
        interface AutoLookupControl extends StandardControl, UiKeyPressable {
            /**
             * Gets the latest value in a control as the user types characters in a specific text or number field.
             * This method helps you to build interactive experiences by validating data and alerting users as they type characters in a control.
             * The getValue method is different from the attribute getValue method because the control method retrieves the value from the control
             * as the user is typing in the control as opposed to the attribute getValue method that retrieves the value after the user commits (saves) the field.
             */
            getValue(): string;

            /**
             * Hides the auto-completion drop-down list configured for a specific text field
             * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
             */
            hideAutoComplete(): void;

            /**
             * Shows upt to 10 matching strings in a drop-down list as users press keys to type charactrer in a specific text field.
             * On selecting an item in the drop-down list, the value in the text field changes to the selected item, the drop-down list disappears, and the OnChange event for the text field is invoked
             * @deprecated: Deprecated in v9. See {@link https://docs.microsoft.com/en-us/dynamics365/get-started/whats-new/customer-engagement/important-changes-coming#some-client-apis-are-deprecated}
             * @param resultSet The results to show
             */
            showAutoComplete(resultSet: AutoCompleteResultSet): void;
        }

        /**
         * Interface for a String control.
         *
         * @sa  StandardControl
         */
        interface StringControl extends AutoLookupControl {
            /**
             * Gets the control's bound attribute.
             *
             * @return The attribute.
             */
            getAttribute(): StringAttribute;
        }

        /**
         * Interface for a Number control.
         *
         * @sa  StandardControl
         */
        interface NumberControl extends AutoLookupControl {
            /**
             * Gets the control's bound attribute.
             *
             * @return The attribute.
             */
            getAttribute(): NumberAttribute;
        }

        /**
         * Interface for a Date control.
         *
         * @sa  StandardControl
         */
        interface DateControl extends StandardControl {
            /**
             * Gets the control's bound attribute.
             *
             * @return The attribute.
             */
            getAttribute(): DateAttribute;

            /**
             * Gets the status of the time-of-day component of the Date control.
             *
             * @return true if the time is shown, otherwise false.
             */
            getShowTime(): boolean;

            /**
             * Sets the visibility of the time component of the Date control.
             *
             * @param showTimeValue true to show, false to hide the time value.
             */
            setShowTime(showTimeValue: boolean): void;
        }

        /**
         * Interface for a Lookup control.
         *
         * @sa  StandardControl
         */
        interface LookupControl extends StandardControl {
            /**
             * Adds a handler to the "pre search" event of the Lookup control.
             *
             * @param handler The handler.
             */
            addPreSearch(handler: ContextSensitiveHandler): void;

            /**
             * Adds an additional custom filter to the lookup, with the "AND" filter operator.
             * Can only be used within a "pre search" event handler
             *
             * @sa addPreSearch
             *
             * @param filter Specifies the filter, as a serialized FetchXML
             *                                          "filter" node.
             * @param entityLogicalName (Optional) The logical name of the entity.
             *
             * @remarks     If entityLogicalName is not specified, the filter will be applied to all entities
             *              valid for the Lookup control.
             *              Example filter: <filter type="and">
             *                              <condition attribute="address1_city" operator="eq" value="Redmond" />
             *                              </filter>
             */
            addCustomFilter(filter: string, entityLogicalName?: string): void;

            /**
             * Adds a custom view for the Lookup dialog.
             *
             * @param viewId Unique identifier for the view, in Guid format.
             * @param entityName Name of the entity.
             * @param viewDisplayName Name of the view to display.
             * @param fetchXml The FetchXML query for the view's contents, serialized as a string.
             * @param layoutXml The Layout XML, serialized as a string.
             * @param isDefault true, to treat this view as default.
             *
             * @remarks Cannot be used on "Owner" Lookup controls.
             *          The viewId is never saved to CRM, but must be unique across available views.  Generating
             *          a new value can be accomplished with a {@link http://www.guidgen.com/|Guid generator}.
             *          Example viewId value: "{00000000-0000-0000-0000-000000000001}"
             *          Layout XML Reference: {@link http://msdn.microsoft.com/en-us/library/gg334522.aspx}.
             */
            addCustomView(viewId: string, entityName: string, viewDisplayName: string, fetchXml: string, layoutXml: string, isDefault: boolean): void;

            /**
             * Gets the control's bound attribute.
             *
             * @return The attribute.
             */
            getAttribute(): LookupAttribute;

            /**
             * Gets the unique identifier of the default view.
             *
             * @return The default view, in Guid format.
             *
             * @remarks Example: "{00000000-0000-0000-0000-000000000000}"
             */
            getDefaultView(): string;

            /**
             * Removes the handler from the "pre search" event of the Lookup control.
             *
             * @param handler The handler.
             */
            removePreSearch(handler: () => void): void;

            /**
             * Sets the Lookup's default view.
             *
             * @param viewGuid Unique identifier for the view.
             *
             * @remarks Example viewGuid value: "{00000000-0000-0000-0000-000000000000}"
             */
            setDefaultView(viewGuid: string): void;

            /**
             * Gets the types of entities allowed in the lookup control.
             */
            getEntityTypes(): string[];

            /**
             * Sets the types of entities allowed in the lookup control.
             */
            setEntityTypes(entityLogicalNames: string[]): void;
        }

        /**
         * Interface for an OptionSet control.
         *
         * @sa  StandardControl
         */
        interface OptionSetControl extends StandardControl {
            /**
             * Adds an option.
             *
             * @param option The option.
             * @param index (Optional) zero-based index of the option.
             *
             * @remarks This method does not check that the values within the options you add are valid.
             *          If index is not provided, the new option will be added to the end of the list.
             */
            addOption(option: OptionSetValue, index?: number): void;

            /**
             * Clears all options.
             */
            clearOptions(): void;

            /**
             * Gets the control's bound attribute.
             *
             * @return The attribute.
             */
            getAttribute(): OptionSetAttribute;

            /**
             * Removes the option matching the value.
             *
             * @param value The value.
             */
            removeOption(value: number): void;
        }

        /**
         * Interface for a CRM grid control.
         *
         * @sa  Control
         */
        interface GridControl extends Control {
            /**
             * Use this method to add event handlers to the GridControl's OnLoad event.
             *
             * @param handler The event handler.
             */
            addOnLoad(handler: () => void): void;

            /**
             * This method returns context information about the GridControl.
             *
             * @return The context type.
             */
            getContextType(): XrmEnum.GridControlContext;

            /**
             * Use this method to get the logical name of the entity data displayed in the grid.
             *
             * @return The entity name.
             */
            getEntityName(): string;

            /**
             * Use this method to get access to the Grid available in the GridControl.
             *
             * @return The grid.
             */
            getGrid(): ui.Grid;

            /**
             * Use this method to get access to the ViewSelector available for the GridControl when it is configured to display views.
             *
             * @return The view selector.
             */
            getViewSelector(): ui.ViewSelector;

            /**
             * Refreshes the sub grid.
             *
             * @remarks Not available during the "on load" event of the form.
             */
            refresh(): void;

            /**
             * Use this method to remove event handlers from the GridControl's OnLoad event.
             *
             * @param handler The handler.
             */
            removeOnLoad(handler: () => void): void;
        }

        /**
         * Interface for a framed control, which is either a Web Resource or an Iframe.
         *
         * @sa  Control
         *
         * @remarks     An Iframe control provides additional methods, so use {@link IframeControl} where
         *              appropriate.  Silverlight controls should use {@link SilverlightControl}.
         */
        interface FramedControl extends Control {
            /**
             * Gets the DOM element containing the control.
             *
             * @return The container object.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getObject(): HTMLIFrameElement;

            /**
             * Gets the URL value of the control.
             *
             * @return The source URL.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getSrc(): string;

            /**
             * Sets the URL value of the control.
             *
             * @param src The source URL.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            setSrc(src: string): void;
        }

        /**
         * Interface for an Iframe control.
         *
         * @sa  FramedControl
         */
        interface IframeControl extends FramedControl, UiCanSetVisibleElement {
            /**
             * Gets initial URL defined for the Iframe.
             *
             * @return The initial URL.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getInitialUrl(): string;
        }

        /**
         * Interface for a Silverlight control.
         *
         * @sa  Control
         */
        interface SilverlightControl extends Control {
            /**
             * Gets the query string value passed to Silverlight.
             *
             * @return The data.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getData(): string;

            /**
             * Sets the query string value passed to Silverlight.
             *
             * @param data The data.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            setData(data: string): void;

            /**
             * Gets the DOM element containing the control.
             *
             * @return The container object.
             *
             * @remarks Unavailable for Microsoft Dynamics CRM for tablets.
             */
            getObject(): HTMLObjectElement;
        }

        /**
         * Interface for a Timeline control.
         *
         * @sa  Control
         */
        interface TimelineWall extends Control {
            /**
             * Refreshes the data displayed in a timelinewall and timer control.
             *
             */
            refresh(): void;
        }

        /**
         * Interface for a form tab.
         *
         * @sa  UiElement
         * @sa  UiFocusable
         */
        interface Tab extends UiStandardElement, UiFocusable {
            /**
             * Gets display state of the tab.
             *
             * @return The display state, as either "expanded" or "collapsed"
             */
            getDisplayState(): ui.DisplayState;

            /**
             * Gets the name of the tab.
             *
             * @return The name.
             */
            getName(): string;

            /**
             * Gets a reference to the Xrm.Page.ui parent of the tab.
             *
             * @return The parent.
             */
            getParent(): Ui;

            /**
             * Sets display state of the tab.
             *
             * @param displayState Display state of the tab, as either "expanded" or "collapsed"
             */
            setDisplayState(displayState: ui.DisplayState): void;

            /**
             * A reference to the collection of form sections within this tab.
             */
            sections: Collection.ItemCollection<Section>;
        }

        /**
         * Interface for a form section.
         *
         * @sa  UiElement
         */
        interface Section extends UiStandardElement {
            /**
             * Gets the name of the section.
             *
             * @return The name.
             */
            getName(): string;

            /**
             * Gets a reference to the Xrm.Page.Tab parent of this item.
             *
             * @return The parent.
             */
            getParent(): Tab;

            /**
             * A reference to the collection of controls within this tab.
             */
            controls: Collection.ItemCollection<Control>;
        }

        /**
         * Module for Xrm.Page.ui API.
         */
        namespace ui {
            /**
             * Form Notification Levels for Xrm.Ui.setFormNotification().
             */
            type FormNotificationLevel = "ERROR" | "INFO" | "WARNING";

            /**
             * Display States for Xrm.ui.ProcessMonitor.setDisplayState().
             */
            type DisplayState = "collapsed" | "expanded";

            /**
             * Interface for Xrm.Page.ui.process API
             */
            interface ProcessManager {
                /**
                 * Sets display state of the process flow control.
                 *
                 * @param displayState Display state of the process flow control, as either "expanded" or "collapsed"
                 */
                setDisplayState(displayState: DisplayState): void;

                /**
                 * Sets the visibility state.
                 *
                 * @param visible true to show, false to hide.
                 */
                setVisible(visible: boolean): void;
            }

            /**
             * Interface for a grid.  Use Grid methods to access information about data in the grid. Grid is returned by the
             * GridControl.getGrid method.
             */
            interface Grid {
                /**
                 * Returns a collection of every GridRow in the Grid.
                 *
                 * @return The rows.
                 */
                getRows(): Collection.ItemCollection<GridRow>;

                /**
                 * Returns a collection of every selected GridRow in the Grid.
                 *
                 * @return The selected rows.
                 */
                getSelectedRows(): Collection.ItemCollection<GridRow>;

                /**
                 * Returns the total number of records in the Grid.
                 *
                 * @return The total record count.
                 */
                getTotalRecordCount(): number;
            }

            /**
             * Interface for a grid row.  Use the GridRow.getData method to access the GridRowData. A collection of GridRow is
             * returned by Grid.getRows and Grid.getSelectedRows methods.
             * In V9 - this is essentailly a form context.
             */
            interface GridRow {
                /**
                 * Provides methods to work with the row data.
                 */
                data: Data;
                /**
                 * Returns the GridRowData for the GridRow.
                 * @deprecated Deprecated in V9 - use data field instead
                 * @return The data.
                 */
                getData(): GridRowData;
            }

            /**
             * Interface for grid row data.  Use the GridRowData.getEntity method to access the GridEntity. GridRowData is
             * returned by the GridRow.getData method.
             */
            interface GridRowData {
                /**
                 * Returns the GridEntity for the GridRowData.
                 *
                 * @return The entity.
                 */
                getEntity(): GridEntity;
            }

            /**
             * Interface for a grid entity.  Use the GridEntity methods to access data about the specific records in the rows.
             * GridEntity is returned by the GridRowData.getEntity method.
             */
            interface GridEntity {
                /**
                 * Returns the logical name for the record in the row.
                 *
                 * @return The entity name.
                 */
                getEntityName(): string;

                /**
                 * Returns a LookupValue that references this record.
                 *
                 * @return The entity reference.
                 */
                getEntityReference(): LookupValue;

                /**
                 * Returns the id for the record in the row.
                 *
                 * @return The identifier of the GridEntity, in GUID format.
                 *
                 * @remarks Example return: "{00000000-0000-0000-0000-000000000000}"
                 */
                getId(): string;

                /**
                 * Returns the primary attribute value for the record in the row.  (Commonly the name.)
                 *
                 * @return The primary attribute value.
                 */
                getPrimaryAttributeValue(): string;
            }

            /**
             * Interface for the view selector.  Use the ViewSelector methods to get or set information about the view selector
             * of the grid control.
             */
            interface ViewSelector {
                /**
                 * Use this method to get a reference to the current view.
                 *
                 * @return The current view.
                 */
                getCurrentView(): ViewSelectorItem;

                /**
                 * Use this method to determine whether the view selector is visible.
                 *
                 * @return true if visible, false if not.
                 */
                isVisible(): boolean;

                /**
                 * Use this method to set the current view.
                 *
                 * @param viewSelectorItem The view selector item.
                 */
                setCurrentView(viewSelectorItem: ViewSelectorItem): void;
            }

            /**
             * Interface for a view selector item. This object contains data that identifies a view. Use this as a parameter to
             * the ViewSelector.setCurrentView method.
             */
            interface ViewSelectorItem {
                /**
                 * Returns a LookupValue that references this view.
                 *
                 * @return The entity reference.
                 */
                getEntityReference(): LookupValue;
            }

            /**
             * Interface for a quick view control instance on a form.
             *
             * @see {@link https://msdn.microsoft.com/en-us/library/mt736908.aspx#bkmk_isLoaded} for details.
             */
            interface QuickForm extends Control, UiLabelElement, UiCanGetVisibleElement {
                /**
                 * Gets the constituent controls in a quick view control.
                 *
                 * @return An array of controls.
                 *
                 * @remarks Constituent controls in a quick view control are read only.
                 */
                getControl(): Control[];

                /**
                 * Gets the constituent controls in a quick view control.
                 *
                 * @param T A Control type
                 * @param controlName Name of the control.
                 *
                 * @return The control.
                 *
                 * @remarks Constituent controls in a quick view control are read only.
                 */
                getControl<T extends Control>(controlName: string): T;

                /**
                 * Gets the constituent controls in a quick view control.
                 *
                 * @param controlName Name of the control.
                 *
                 * @return The control.
                 *
                 * @remarks Constituent controls in a quick view control are read only.
                 */
                getControl(controlName: string): Control;

                /**
                 * Gets a control by index.
                 *
                 * @param T A Control type
                 * @param index The control index.
                 *
                 * @return The control.
                 *
                 * @remarks Constituent controls in a quick view control are read only.
                 */
                getControl<T extends Control>(index: number): T;

                /**
                 * Gets a control by index.
                 *
                 * @param index The control index.
                 *
                 * @return The control.
                 *
                 * @remarks Constituent controls in a quick view control are read only.
                 */
                getControl(index: number): Control;

                /**
                 * Gets the controls type.
                 *
                 * @return Returns a string value that categorizes quick view controls.
                 */
                getControlType(): ControlQuickFormType;

                /**
                 * Returns whether the data binding for the constituent controls in a quick view control is complete.
                 *
                 * @return  True is the data binding for a constituent control is complete, otherwise false.
                 *          because the quick view form that the control is bound to may not have loaded completely.
                 *          As a result, using the getAttribute or any data-related methods on a constituent control might not work.
                 *          The isLoaded method for the quick view control helps determine the data binding status for constituent controls in a quick view control.
                 *
                 *  @remarks The data binding for the constituent controls in a quick view control may not be complete during the main form OnLoad event
                 */
                isLoaded(): boolean;

                /**
                 * Refreshes the data displayed in a quick view control.
                 */
                refresh(): void;
            }
        }

        /**
         * Interface for a navigation item.
         *
         * @sa  UiElement
         * @sa  UiFocusable
         */
        interface NavigationItem extends UiStandardElement, UiFocusable {
            /**
             * Gets the name of the item.
             *
             * @return The identifier.
             */
            getId(): string;
        }

        /**
         * Interface for Xrm.Page.ui.navigation.
         */
        interface Navigation {
            /**
             * A reference to the collection of available navigation items.
             */
            items: Collection.ItemCollection<NavigationItem>;
        }

        /**
         * Interface for an entity's form selector item.
         */
        interface FormItem {
            /**
             * Gets the unique identifier of the form.
             *
             * @return The identifier, in Guid format.
             */
            getId(): string;

            /**
             * Gets the label for the form.
             *
             * @return The label.
             */
            getLabel(): string;

            /**
             * Navigates the user to this form.
             */
            navigate(): void;
        }

        /**
         * Interface for the form selector API.
         */
        interface FormSelector {
            /**
             * Gets current form.
             *
             * @return The current item.
             *
             * @remarks When only one form is available this method will return null.
             */
            getCurrentItem(): FormItem;

            /**
             * A reference to the collection of available forms.
             */
            items: Collection.ItemCollection<FormItem>;
        }

        interface AddControlNotificationOptions {
            /**
             * A collection of actions
             */
            actions?: ControlNotificationAction[];

            /**
             * The message to display in the notification.
             * In the current release, only the first message specified in this array will be displayed.
             */
            messages: string[];

            /**
             * Defines the type of notification.
             */
            notificationLevel?: NotificationLevel;

            /**
             * The ID to use to clear this notification when using the clearNotification method.
             */
            uniqueId: string;
        }

        /**
         * Constants to use with the addNotification method of form controls
         */
        type NotificationLevel = "ERROR" | "RECOMMENDATION";

        /**
         * interface to define the actions on a control notification
         */
        interface ControlNotificationAction {
            /**
             * The body message of the notification to be displayed to the user. Limit your message to 100 characters for optimal user experience.
             */
            message?: string;

            /**
             * Array of functions. The corresponding actions for the message.
             */
            actions: Array<() => void>;
        }
    }

    /**
     * An definition module for URL-based, CRM component parameters.
     *
     * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
     */
    namespace Url {
        /**
         * Command Bar Display options for Xrm.Url.FormOpenParameters.cmdbar, Xrm.Url.ViewOpenParameters.cmdbar, and Xrm.Utility.FormOpenParameters.cmdbar.
         */

        type CmdBarDisplay = "true" | "false";
        /**
         * Navigation Bar Display options for Xrm.Url.FormOpenParameters.navbar, Xrm.Url.ViewOpenParameters.navbar, and Xrm.Utility.FormOpenParameters.navbar.
         */
        type NavBarDisplay = "entity" | "off" | "on";

        /**
         * Report Open Action options for Xrm.Url.ReportOpenParameters.actions.
         */
        type ReportAction = "filter" | "run";

        /**
         * Interface for defining parameters on a request to open a form with main.aspx (as with
         * window.open). Useful for parsing the keys and values into a string of the format:
         * "&key=value".
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
         *
         * @remarks  A member for "pagetype" is not provided.  The value "entityrecord" is required in
         *           the URL, for forms. Example:  "pagetype=entityrecord"
         */
        interface FormOpenParameters {
            /**
             * The logical name of the entity.
             */
            etn: string;

            /**
             * Additional parameters can be provided to the request. This can only be used to provide
             * default field values for the form, or pass data to custom parameters that have been
             * customized for the form.  See example below for setting the selected form.
             *
             * @remarks Example:  encodeURIComponent("formid={8c9f3e6f-7839-e211-831e-00155db7d98f}");
             */
            extraqs?: string;

            /**
             * Controls whether the command bar is displayed.
             * Accepted values are: "true"    (The command bar is displayed.)
             *                      "false"   (The command bar is not displayed.)
             */
            cmdbar?: CmdBarDisplay;

            /**
             * Controls whether the Navigation bar is displayed on the form.
             * Accepted values are: "on"      (The navigation bar is displayed.)
             *                      "off"     (The navigation bar is not displayed.)
             *                      "entity"  (On an entity form, only the navigation options for related
             *                                entities are available.)
             */
            navbar?: NavBarDisplay;
        }

        /**
         * Interface for defining parameters on a request to open a view with main.aspx (as with
         * window.open). Useful for parsing the keys and values into a string of the format:
         * "&key=value".
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
         *
         * @remarks  A member for "pagetype" is not provided.  The value "entitylist" is required in
         *           the URL, for views. Example:  "pagetype=entitylist"
         */
        interface ViewOpenParameters {
            /**
             * The logical name of the entity.
             */
            etn: string;

            /**
             * The unique identifier of a view, in Guid format, which is valid for the entity described by
             * {@link etn}.
             */
            viewid: string;

            /**
             * The type of view identified by {@link viewid}.
             *
             * @remarks  Accepted values are:    1039    System View
             *                                   4230    User View.
             */
            viewtype: XrmEnum.ViewType;

            /**
             * Controls whether the command bar is displayed.
             * Accepted values are: "true"    (The command bar is displayed.)
             *                      "false"   (The command bar is not displayed.)
             */
            cmdbar?: CmdBarDisplay;

            /**
             * Controls whether the Navigation bar is displayed on the form.
             * Accepted values are: "on"      (The navigation bar is displayed.)
             *                      "off"     (The navigation bar is not displayed.)
             *                      "entity"  (On an entity form, only the navigation options for related
             *                                entities are available.)
             */
            navbar?: NavBarDisplay;
        }

        /**
         * Interface for defining parameters of a request to open a dialog with rundialog.aspx (as with
         * window.open).  Useful for parsing the keys and values into a string of the format:
         * "&key=value".
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
         */
        interface DialogOpenParameters {
            /**
             * The unique identifier of the dialog, in Guid format, which is valid for the entity described
             * by: {@link EntityName}
             */
            DialogId: string;

            /**
             * The logical name of the entity.
             */
            EntityName: string;

            /**
             * The unique identifier for the targeted record.
             */
            ObjectId: string;
        }

        /**
         * Interface for defining parameters of a request to open a report with viewer.apsx (as with
         * window.open).  Useful for parsing out the keys and values into a string of the format:
         * "&key=value"
         *
         * @see {@link http://msdn.microsoft.com/en-us/library/gg328483.aspx} for details.
         */
        interface ReportOpenParameters {
            /**
             * The action to perform, as either "run" or "filter".
             *
             * @remarks  "run"       Executes the report with default filters.
             *           "filter"    Presents the user with the filter editor, and a "Run Report" button.
             */
            action: ReportAction;

            /**
             * The file name of the report.  For out-of-box reports, this parameter enables context-sensitive
             * help.
             */
            helpID?: string;

            /**
             * The unique identifier, held in the report's 'reportid' attribute, in Guid format.
             */
            id: string;
        }
    }

    /**
     * The Xrm.Utility API
     *
     * @see {@link http://msdn.microsoft.com/en-us/library/gg328255.aspx|Documentation} for details.
     */
    namespace Utility {
        /**
         * Interface use to provide parameters when opening new entiy forms
         */
        interface OpenParameters {
            /**
             * Additional parameters can be provided to the request, by overloading
             * this object with additional key and value pairs. This can only be used
             * to provide default field values for the form, or pass data to custom
             * parameters that have been customized for the form.
             */
            [index: string]: string | undefined;
        }

        /**
         * Interface for defining parameters on a Xrm.Utility.openEntityForm() request.
         */
        interface FormOpenParameters extends OpenParameters {
            /**
             * The identifier of the form to use, when several are available.
             */
            formid?: string;

            /**
             * Controls whether the Navigation bar is displayed on the form.
             * Accepted values are: "on"      (The navigation bar is displayed.)
             *                      "off"     (The navigation bar is not displayed.)
             *                      "entity"  (On an entity form, only the navigation options for related
             *                                entities are available.)
             */
            navbar?: Url.NavBarDisplay;

            /**
             * Controls whether the command bar is displayed.
             * Accepted values are: "true"    (The command bar is displayed.)
             *                      "false"   (The command bar is not displayed.)
             */
            cmdbar?: Url.CmdBarDisplay;
        }

        /**
         * Interface for window options.
         */
        interface WindowOptions {
            /**
             * Direct the form to open in a new window.
             */
            openInNewWindow: boolean;
        }
    }

    /**
     * Namespace to hold Xrm.Navigation related types
     *
     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-navigation} for details
     */
    namespace Navigation {
        interface AlertStrings {
            /**
             * (Optional) The confirm button label.If you do not specify the button label, OK is used as the button label.
             */
            confirmButtonLabel?: string;
            /**
             *  The message to be displyed in the alert dialog.
             */
            text: string;
        }

        interface ConfirmStrings {
            /**
             * (Optional) The cancel button label. If you do not specify the cancel button label, Cancel is used as the button label.
             */
            cancelButtonLabel?: string;

            /**
             * (Optional) The confirm button label.If you do not specify the button label, OK is used as the button label.
             */
            confirmButtonLabel?: string;

            /**
             * (Optional) The subtitle to be displayed in the confirmation dialog.
             */
            subtitle?: string;

            /**
             *  (Optional) The title to be displyed in the confirmation dialog.
             */
            title: string;

            /**
             *  The message to be displyed in the alert dialog.
             */
            text: string;
        }

        interface DialogSizeOptions {
            /**
             * Height of the alert dialog in pixels.
             */
            height: number;
            /**
             * Width of the alert dialog pixels.
             */
            width: number;
        }

        interface OpenWebresourceOptions extends DialogSizeOptions {
            /**
             *  Indicates whether to open the web resource in a new window.
             */
            openInNewWindow: boolean;
        }

        /**
         * An object with the confirmed (Boolean) attribute is passed that indicates whether the confirm button was clicked to close the dialog.
         */
        interface ConfirmResult {
            /**
             * true if the confirm button was clicked to close the dialog.
             */
            confirmed: boolean;
        }

        /**
         * Details to show in the Error dialog
         */
        interface ErrorDialogOptions {
            /**
             * Details about the error. When you specify this, the Download Log File button is available in the error message,
             * and clicking it will let users download a text file with the content specified in this attribute.
             */
            details?: string;
            /**
             * The error code. If you just set errorCode, the message for the error code is automatically
             * retrieved from the server and displayed in the error dialog.
             * If you specify an invalid errorCode value, an error dialog with a default error message is displyed.
             */
            errorCode?: number;
            /**
             *  The message to be displayed in the error dialog.
             */
            message?: string;
        }

        interface FileDetails {
            /**
             * Contents of the file.
             */
            fileContent: string;
            /**
             * Name of the file.
             */
            fileName: string;
            /**
             * Size of the file in KB.
             */
            fileSize: number;
            /**
             * String. MIME type of the file.
             */
            mimeType: string;
        }

        /**
         * Entity form options for opening the form
         */
        interface EntityFormOptions {
            /**
             * Indicates whether to display the command bar.If you do not specify this parameter, the command bar is displayed by default.
             */
            cmdbar?: boolean;
            /**
             * Designates a record that will provide default values based on mapped attribute values.The lookup object has the following String properties: entityType, id, and name (optional).
             */
            createFromEntity?: Page.LookupValue;
            /**
             * ID of the entity record to display the form for.
             */
            entityId?: string;
            /**
             * Logical name of the entity to display the form for.
             */
            entityName?: string;
            /**
             * ID of the form instance to be displayed.
             */
            formId?: string;
            /**
             * Height of the form window to be displayed in pixels.
             */
            height?: number;
            /**
             * Undocumented at this time
             */
            isCrossEntityNavigate?: boolean;
            /**
             * Undocumented at this time
             */
            isOfflineSyncError?: boolean;
            /**
             * Controls whether the navigation bar is displayed and whether application navigation is available using the areas and subareas defined in the sitemap.Valid vlaues are: "on", "off", or "entity".
             *      on: The navigation bar is displayed.This is the default behavior if the navBar parameter is not used.
             *      off: The navigation bar is not displayed.People can navigate using other user interface elements or the back and forward buttons.
             *      entity: On an entity form, only the navigation options for related entities are available.After navigating to a related entity, a back button is displayed in the navigation bar to allow returning to the original record.
             */
            navBar?: Url.NavBarDisplay;
            /**
             * Indicates whether to display form in a new window.
             */
            openInNewWindow?: boolean;
            /**
             * Specify one of the following values for the window position of the form on the screen:
             *                  1:center
             *                  2:side
             */
            windowPosition?: XrmEnum.WindowPositions;
            /**
             * ID of the business process to be displayed on the form.
             */
            processId?: string;
            /**
             * ID of the business process instance to be displayed on the form.
             */
            processInstanceId?: string;
            /**
             * Define a relationship object to display the related records on the form.
             */
            relationship?: Relationship;
            /**
             * ID of the selected stage in business process instance.
             */
            selectedStageId?: string;
            /**
             * Indicates whether to open a quick create form.
             */
            useQuickCreateForm?: boolean;
            /**
             * Width of the form window to be displayed in pixels.
             */
            width?: number;
        }

        interface Relationship {
            /**
             * Name of the attribute used for relationship.
             */
            attributeName: string;
            /**
             * Name of the relationship.
             */
            name: string;
            /**
             * Name of the navigation property for this relationship.
             */
            navigationPropertyName?: string;
            /**
             * Relationship type.Specify one of the following values:
             *                       0:OneToMany
             *                       1:ManyToMany
             */
            relationshipType?: XrmEnum.RelationshipType;	//
            /**
             * Role type in relationship.Specify one of the following values:
             *       1:Referencing
             *       2:AssociationEntity
             */
            roleType?: XrmEnum.RoleType;
        }
    }

    /**
     * Interface for the Xrm.Navigation API
     */
    interface Navigation {
        /**
         * Displays an alert dialog containing a message and a button.
         * @param  alertStrings The strings to be used in the alert dialog.
         * @param alertOptions The height and width options for alert dialog
         */
        openAlertDialog(alertStrings: Navigation.AlertStrings, alertOptions: Navigation.DialogSizeOptions): Async.PromiseLike<any>;

        /**
         * Displays a confirmation dialog box containing a message and two buttons.
         * @param confirmStrings The strings to be used in the confirm dialog.
         * @param confirmOptions The height and width options for alert dialog
         */
        openConfirmDialog(confirmStrings: Navigation.ConfirmStrings, confirmOptions: Navigation.DialogSizeOptions): Async.PromiseLike<Navigation.ConfirmResult>;

        /**
         * Displays an error dialog.
         * @param confirmStrings The strings to be used in the confirm dialog.
         * @param confirmOptions The height and width options for alert dialog
         */
        openConfirmDialog(errorOptions: Navigation.ErrorDialogOptions): Async.PromiseLike<any>;

        /**
         * Opens a file.
         */
        openFile(file: Navigation.FileDetails, openFileOptions: XrmEnum.OpenFileOptions): void;

        /**
         * Opens an entity form or a quick create form.
         */
        openForm(entityFormOptions: Navigation.EntityFormOptions, formParameters: Utility.OpenParameters): Async.PromiseLike<any>;

        /**
         * Opens a URL, including file URLs.
         * @param url URL to open.
         * @param openUrlOptions  Options to open the URL
         */
        openUrl(url: string, openUrlOptions?: Navigation.DialogSizeOptions): void;

        /**
         * Opens an HTML web resource.
         * @param webResourceName Name of the HTML web resource.
         * @param windowOptions (Optional) Window options for opening the web resource.
         *                      It is advised to use encodeURIcomponent() to encode the value.
         */
        openWebResource(webResourceName: string, windowOptions?: Navigation.OpenWebresourceOptions, data?: string): void;
    }

    /**
     * Namespace to hold the Metadata types
     */
    namespace Metadata {
        /**
         * Types returned by a call to getEntityMetadata
         */
        interface EntityMetadata {
            ActivityTypeMask: number;
            Attributes: Collection.ItemCollection<AttributeMetadata>;
            AutoRouteToOwnerQueue: boolean;
            CanEnableSyncToExternalSearchIndex: boolean;
            CanBeInManyToMany: boolean;
            CanBePrimaryEntityInRelationship: boolean;
            CanBeRelatedEntityInRelationship: boolean;
            CanCreateAttributes: boolean;
            CanCreateCharts: boolean;
            CanCreateForms: boolean;
            CanCreateViews: boolean;
            CanModifyAdditionalSettings: boolean;
            CanTriggerWorkflow: boolean;
            Description: Label;
            DisplayCollectionName: Label;
            DisplayName: Label;
            EntityColor: string;
            EntitySetName: string;
            IconLargeName: string;
            IconMediumName: string;
            IconSmallName: string;
            IsActivity: boolean;
            IsActivityParty: boolean;
            IsAuditEnabled: boolean;
            IsAvailableOffline: boolean;
            IsBPFEntity: boolean;
            IsChildEntity: boolean;
            IsConnectionsEnabled: boolean;
            IsCustomEntity: boolean;
            IsCustomizable: boolean;
            IsDocumentManagementEnabled: boolean;
            IsDuplicateDetectionEnabled: boolean;
            IsEnabledForCharts: boolean;
            IsOneNotIntegrationEnabled: boolean;
            IsOptimisitcConcurrencyEnabled: boolean;
            IsQuickCreateEnabled: boolean;
            IsImportable: boolean;
            IsIntersect: boolean;
            IsMailMergeEnabled: boolean;
            IsManaged: boolean;
            IsMappable: boolean;
            IsReadingPaneEnabled: boolean;
            IsRenameable: boolean;
            IsStateModelAware: boolean;
            IsValidForAdvancedFind: boolean;
            IsValidForQueue: boolean;
            IsVisibleInMobileClient: boolean;
            LogicalCollectionName: string;
            LogicalName: string;
            ObjectTypeCode: number;
            OwnershipTypeCode: number;
            PrimaryIdAttribute: string;
            PrimaryNameAttribute: string;
            RecurrenceBaseEntityLogicalName: string;
            PrimaryImageAttribute: string;
        }
        /**
         * Type to hold Labels as part of the EntityMetadata
         */
        interface Label {
            LocalizedLabels: Collection.ItemCollection<LocalizedLabel>;
            UserLocalizedLabel: LocalizedLabel;
        }
        /**
         * Type to hold a Label as part of the EntityMetadata
         */
        interface LocalizedLabel {
            Label: string;
            LanguageCode: number;
        }
        /**
         * Type to hold the Attribute metadata as part of the EntityMetadata
         */
        interface AttributeMetadata {
            defaultFormValue: number;
            options: Collection.ItemCollection<string>;
            logicalName: string;
            displayName: string;
            attributeType: XrmEnum.AttributeTypeCode;
            entityLogicalName: string;
            optionSet: Collection.ItemCollection<OptionMetadata>;
        }
        /**
         * Type to hold the optionset metadata as part of the EntityMetadata
         */
        interface OptionMetadata {
            Value: number;
            Color: string;
            IsManaged: boolean;
            ExternalValue: any;
            MetadataId: string;
            HasChanged: boolean;
            State: number;
            TransitionData: any;
            Label: Label;
            Description: Label;
        }
    }

    /**
     * Namespace to hold Xrm.Device related types
     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device} for details
     */
    namespace Device {
        /**
         * Xrm.Device.captureAudio/captureImage/captureVideo response
         */
        interface CaptureFileResponse {
            /**
             * Base64 encoded contents of the file.
             */
            fileContent: string;
            /**
             * Name of the audio file.
             */
            fileName: string;
            /**
             * Size of the file in KB.
             */
            fileSize: number;
            /**
             * File MIME type.
             */
            mimeType: string;
        }

        /**
         * Options for Xrm.Device.captureImage
         */
        interface CaptureImageOptions {
            /**
             * Indicates whether to edit the image before saving.
             */
            allowEdit: boolean;
            /**
             * Height of the image to capture.
             */
            height: number;
            /**
             * Indicates whether to capture image using the front camera of the device.
             */
            preferFrontCamera: boolean;
            /**
             * Quality of the image file in percentage. Number.
             */
            quality: number;
            /**
             * Width of the image to capture
             */
            width: number;
        }

        /**
         * Interface for Xrm.Device.getCurrentPosition response
         */
        interface GetCurrentPositionResponse {
            /**
             * Contains a set of geographic coordinates along with associated accuracy as well as a set of other optional attributes such as altitude and speed.
             */
            coords: any;
            /**
             * Represents the time when the object was acquired and is represented as DOMTimeStamp.
             */
            timestamp: number;
        }

        /**
         * Posible file types for Xrm.Device.pickFile options
         */
        type PickFileTypes = "audio" | "video" | "image";

        /**
         * Interface for Xrm.Device.pickFile options
         */
        interface PickFileOptions {
            /**
             * Image file types to select.
             */
            accept: PickFileTypes;
            /**
             * Indicates whether to allow selecting multiple files.
             */
            allowMultipleFiles: boolean;
            /**
             * Maximum size of the files(s) to be selected.
             */
            maximumAllowedFileSize: number;
        }
    }

    /**
     * Interface for Xrm.Device API
     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-device} for details
     */
    interface Device {
        /**
         * Invokes the device microphone to record audio.
         *
         * @returns On success, returns Base64 encoded file
         */
        captureAudio(): Async.PromiseLike<Device.CaptureFileResponse>;

        /**
         * Invokes the device camera to capture an image.
         *
         * @returns On success, returns Base64 encoded file
         */
        captureImage(imageOptions: Device.CaptureImageOptions): Async.PromiseLike<Device.CaptureFileResponse>;

        /**
         * Invokes the device camera to capture video.
         *
         * @returns On success, returns Base64 encoded file
         */
        captureVideo(): Async.PromiseLike<Device.CaptureFileResponse>;

        /**
         * Invokes the device camera to scan the barcode information, such as a product number.
         *
         * @returns On success, Barcode value is returned as a String
         */
        getBarcodeValue(): Async.PromiseLike<string>;

        /**
         * Returns the current location using the device geolocation capability.
         *
         * @returns On success, returns current geolocation information
         */
        getCurrentPosition(): Async.PromiseLike<Device.GetCurrentPositionResponse>;

        /**
         * Opens a dialog box to select files from your computer (web client) or mobile device (mobile clients).
         *
         * @returns On success, returns an array of files
         */
        pickFile(pickFileOptions: Device.PickFileOptions): Async.PromiseLike<Device.CaptureFileResponse[]>;
    }

    /**
     * Interface for Xrm.Encoding API
     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-encoding} for details
     */
    interface Encoding {
        /**
         * Applies attribute encoding to a string.
         *
         * @param arg String to be encoded.
         *
         * @returns Encoded string.
         */
        xmlAttributeEncode(arg: string): string;

        /**
         * Applies XML encoding to a string.
         *
         * @param arg String to be encoded.
         *
         * @returns Encoded string.
         */
        xmlEncode(arg: string): string;
    }

    /**
     * Provides properties and methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement.
     * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi} for details
     */
    interface WebApi extends WebApiBase {
        /**
         * Returns a boolean value indicating whether an entity is offline enabled.
         *
         * @param entityLogicalName Logical name of the entity. For example: "account".
         *
         * @returns true if the entity is offline enabled; otherwise false.
         */
        isAvailableOffline(entityLogicalName: string): boolean;

        /**
         * Provides methods to use Web API to create and manage records and execute Web API actions and functions in Customer Engagement when connected to the Customer Engagement server (online mode).
         */
        online: WebApi;

        /**
         * Provides methods to create and manage records in the Dynamics 365 Customer Engagement mobile clients while working in the offline mode.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/offline} for details
         */
        offline: WebApi;
    }

    /**
     * Interface for the Xrm.WebApi API
     */
    interface WebApiBase {
        /**
         * Creates an entity record
         *
         * @param entityLogicalName Logical name of the entity you want to create. For example: "account".
         * @param record A JSON object defining the attributes and values for the new entity record.
         *
         * @return On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
         */
        createRecord(entityLogicalName: string, record: any): Async.PromiseLike<string>;

        /**
         * Deletes an entity record.
         *
         * @param entityLogicalName The entity logical name of the record you want to delete. For example: "account".
         * @param id GUID of the entity record you want to delete.
         *
         * @return On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
         */
        deleteRecord(entityLogicalName: string, id: string): Async.PromiseLike<string>;

        /**
         * Retrieves an entity record.
         *
         * @param entityLogicalName The entity logical name of the record you want to retrieve. For example: "account".
         * @param id GUID of the entity record you want to retrieve.
         * @param options (Optional) OData system query options, $select and $expand, to retrieve your data.
         *                 -Use the $select system query option to limit the properties returned by including a comma-separated list of property names.
         *                  This is an important performance best practice. If properties aren’t specified using $select, all properties will be returned.
         *                 -Use the $expand system query option to control what data from related entities is returned.
         *                  If you just include the name of the navigation property, you’ll receive all the properties for related records.
         *                  You can limit the properties returned for related records using the $select system query option in parentheses
         *                  after the navigation property name. Use this for both single-valued and collection-valued navigation properties.
         *                  You can also specify multiple query options by using & to separate the query options. For example:
         *                  $select=name&$expand=primarycontactid($select=contactid,fullname)
         *
         * @return On success, returns a promise containing a JSON object with the retrieved attributes and their values.
         */
        retrieveRecord(entityLogicalName: string, id: string, options: string): Async.PromiseLike<any>;

        /**
         * Retrieves a collection of entity records.
         * @param entityLogicalName The entity logical name of the records you want to retrieve. For example: "account".
         * @param options (Optional) OData system query options or FetchXML query to retrieve your data.
         *                Following system query options are supported: $select, $top, $filter, $expand, and $orderby.
         *                To specify a FetchXML query, use the fetchXml attribute to specify the query.
         *                NOTE: You must always use the $select system query option to limit the properties returned for an entity record
         *                by including a comma-separated list of property names. This is an important performance best practice.
         *                If properties aren’t specified using $select, all properties will be returned.
         *                You can specify multiple system query options by using & to separate the query options.
         * @param maxPageSize (Optional) Specify a positive number that indicates the number of entity records to be returned per page.
         *                    If you do not specify this parameter, the default value is passed as 5000.
         *                    If the number of records being retrieved is more than the specified maxPageSize value, nextLink attribute in the returned
         *                    Promise object will contain a link to retrieve the next set of entities.
         *
         * @return  On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
         */
        retrieveMultipleRecords(entityLogicalName: string, options?: string, maxPageSize?: number): Async.PromiseLike<RetrieveMultipleResult>;

        /**
         * Updates an entity record.
         * @param entityLogicalName The entity logical name of the record you want to update. For example: "account".
         * @param id GUID of the entity record you want to update.
         * @param Data A JSON object containing key: value pairs, where key is the property of the entity and value is the value of the property you want update.
         *
         * @return On success, returns a promise object containing the attributes specified earlier in the description of the successCallback parameter.
         */
        updateRecord(entityLogicalName: string, id: string, data: any): Async.PromiseLike<any>;

        /**
         * Execute a single action, function, or CRUD operation.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/execute} for more info
         * @param request Object that will be passed to the Web API endpoint to execute an action, function, or CRUD request.
         */
        execute(request: any): Async.PromiseLike<ExecuteResponse>;

        /**
         * Execute a collection of action, function, or CRUD operations.
         * @see {@link https://docs.microsoft.com/en-us/dynamics365/customer-engagement/developer/clientapi/reference/xrm-webapi/executemultiple} for more info
         * @param request An array of one of one of the following types:
         *                 -objects where each object is an action, function, or CRUD request that you want to execute
         *                     against the Web API endpoint. Each object exposes a getMetadata method that lets you
         *                     define the metadata for the action, function or CRUD request you want to execute.
         *                     This is the same object that you pass in the execute method. For information about the object, see execute.
         *                 -Change set (an array of objects), where each object in the change set is as defined above.
         *                     In this case, all the request objects specified in the change set will get executed in a transaction.
         */
        executeMultiple(request: any[]): Async.PromiseLike<ExecuteResponse[]>;
    }

    /**
     * Interface for the Promise error response arguments
     */
    interface ErrorResponse {
        errorCode: number;
        message: string;
    }

    /**
     * Interface for the WebAPI RetrieveMultiple request response
     */
    interface RetrieveMultipleResult {
        /**
         * An array of JSON objects, where each object represents the retrieved entity record containing attributes and their values as key: value pairs. The Id of the entity record is retrieved by default.
         */
        entities: any[];
        /**
         * If the number of records being retrieved is more than the value specified in the maxPageSize parameter, this attribute returns the URL to return next set of records.
         */
        nextLink: string;
    }

    /**
     * Interface for the WebAPI Execute request response
     */
    interface ExecuteResponse {
        /**
         * (Optional). Object.Response body.
         */
        body: string;
        /**
         * Response headers.
         */
        headers: any;
        /**
         * Indicates whether the request was successful.
         */
        ok: boolean;
        /**
         * Numeric value in the response status code.For example: 200
         */
        status: number;
        /**
         * Description of the response status code.For example: OK
         */
        statusText: string;
        /**
         * Response type.Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
         */
        type: string;
        /**
         * Request URL of the action, function, or CRUD request that was sent to the Web API endpoint.
         */
        url: string;
    }
}

declare namespace XrmEnum {
    /**
     * Enumeration of entity form states/types.
     */
    const enum FormType {
        Undefined = 0,
        Create = 1,
        Update = 2,
        ReadOnly = 3,
        Disabled = 4,
        BulkEdit = 6
    }

    /**
     * Enumeration of entity form save modes.
     */
    const enum SaveMode {
        Save = 1,
        SaveAndClose = 2,
        SaveAndNew = 59,
        AutoSave = 70,
        SaveAsCompleted = 58,
        Deactivate = 5,
        Reactivate = 6,
        Assign = 47,
        Send = 7,
        Qualify = 16,
        Disqualify = 15
    }

    /**
     * Enumeration of stage categories.
     */
    const enum StageCategory {
        Qualify = 0,
        Develop = 1,
        Propose = 2,
        Close = 3,
        Identify = 4,
        Research = 5,
        Resolve = 6
    }

    /**
     * Enumeration of grid control context resolutions.
     */
    const enum GridControlContext {
        Unknown = 0,
        RibbonContextForm = 1,
        RibbonContextListing = 2,
        FormContextUnrelated = 3,
        FormContextRelated = 4
    }

    /**
     * An enumeration for view types.
     */
    const enum ViewType {
        SystemView = 1039,
        UserView = 4230
    }

    /**
     * An enumeration for Attribute Type metadata
     */
    const enum AttributeTypeCode {
        Boolean = 0,
        Customer = 1,
        DateTime = 2,
        Decimal = 3,
        Double = 4,
        Integer = 5,
        Lookup = 6,
        Memo = 7,
        Money = 8,
        Owner = 9,
        PartyList = 10,
        Picklist = 11,
        State = 12,
        Status = 13,
        String = 14,
        Uniqueidentifier = 15,
        CalendarRules = 16,
        Virtual = 17,
        BigInt = 18,
        ManagedProperty = 19,
        EntityName = 20
    }

    /**
     * An enumeration for Attribute required level metadata
     */
    const enum AttributeRequiredLevel {
        None = 0,
        SystemRequired = 1,
        ApplicationRequired = 2,
        Recommended = 3
    }

    /**
     * An enumeration for open file dialog options
     */
    const enum OpenFileOptions {
        Open = 1,
        Save = 2
    }

    /**
     * An enumeration for window positions when opening a new window
     */
    const enum WindowPositions {
        Center = 1,
        Side = 2
    }

    /**
     * An enumeration for Relationship Type Metadata
     */
    const enum RelationshipType {
        OneToMany = 0,
        ManyToMany = 1
    }

    /**
     * An enumeration for Relationship Role Type Metadata
     */
    const enum RoleType {
        Referencing = 1,
        AssociationEntity = 2
    }

    const enum ClientFormFactor {
        Unknown = 1,
        Desktop = 2,
        Tablet = 3,
        Phone = 4
    }
}
