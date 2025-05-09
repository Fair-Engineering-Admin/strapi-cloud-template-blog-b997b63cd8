import type { Schema, Struct } from '@strapi/strapi';

export interface FormFormPage extends Struct.ComponentSchema {
  collectionName: 'components_form_form_pages';
  info: {
    description: 'Reusable form page section';
    displayName: 'Form Page';
    icon: 'file-alt';
  };
  attributes: {
    description: Schema.Attribute.String;
    disclaimer: Schema.Attribute.String;
    footnote: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form.form-page': FormFormPage;
    }
  }
}
