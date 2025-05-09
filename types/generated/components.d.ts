import type { Schema, Struct } from '@strapi/strapi';

export interface FormFormPage extends Struct.ComponentSchema {
  collectionName: 'components_form_form_pages';
  info: {
    description: 'Reusable form page section';
    displayName: 'Form Page';
    icon: 'file-alt';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    disclaimer: Schema.Attribute.RichText;
    footnote: Schema.Attribute.RichText;
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
