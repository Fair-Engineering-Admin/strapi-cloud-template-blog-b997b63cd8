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
    disclaimer: Schema.Attribute.RichText;
    footnote: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FormLandingPage extends Struct.ComponentSchema {
  collectionName: 'components_form_landing_pages';
  info: {
    description: '';
    displayName: 'Landing Page';
    icon: 'chartCircle';
  };
  attributes: {
    brand_disclaimer_btn_label: Schema.Attribute.String;
    brand_disclaimer_title: Schema.Attribute.String;
    cta_btn_label: Schema.Attribute.String;
    featured_heading: Schema.Attribute.String;
    footer_disclaimer: Schema.Attribute.String;
    hero_description: Schema.Attribute.String;
    hero_disclaimer: Schema.Attribute.String;
    hero_tagline: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'You could be owed upto \u00A36,600* in PCP Refunds'>;
    step_1_description: Schema.Attribute.String;
    step_1_title: Schema.Attribute.String;
    step_2_description: Schema.Attribute.String;
    step_2_title: Schema.Attribute.String;
    step_3_description: Schema.Attribute.String;
    step_3_title: Schema.Attribute.String;
    steps_header: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'form.form-page': FormFormPage;
      'form.landing-page': FormLandingPage;
    }
  }
}
