import {CogIcon, ControlsIcon, ErrorOutlineIcon, MenuIcon, SearchIcon} from '@sanity/icons'
import {defineType, defineField} from 'sanity'

const TITLE = 'Settings'

export const settingsType = defineType({
  name: 'settings',
  title: TITLE,
  type: 'document',
  icon: CogIcon,
  groups: [{name: 'header'}, {name: 'new_visit_form'}, {name: 'new_admin_user_form'}],
  fields: [
    defineField({
      name: 'header',
      type: 'object',
      description: 'use to set the labels on the header/menu items',
      group: 'header',
      fields: [
        {
          name: 'new_salesperson',
          title: 'New Admin User Form',
          description: 'form to create a new admin user',
          type: 'string',
        },
        {
          name: 'new_visit',
          title: 'New Visit Form',
          description: 'form to upload photos/videos for a given client and dress',
          type: 'string',
        },
        {
          name: 'clients',
          title: 'Clients',
          description: 'browse through clients',
          type: 'string',
        },
        {
          name: 'log_out',
          title: 'Logout',
          description: 'logout button',
          type: 'string',
        },
        {
          name: 'log_in',
          title: 'Log In',
          description: 'log in button',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'new_admin_user_form',
      group: 'new_admin_user_form',
      type: 'object',
      description: 'use to set the labels on the new admin user form',
      fields: [
        {name: 'form_title', type: 'string', description: 'Title of the page above the form'},
        {
          name: 'name',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'title',
          description:
            'Job/position for the admin user. Used in the email signature. (ex: Salesperson)',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'email',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'phone',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'office',
          description: 'Checkbox inputs used to determine which studio the admin user works at',
          type: 'object',
          fields: [{name: 'label', type: 'string'}],
        },
        {
          name: 'password',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'password_confirmation',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'submit_button',
          type: 'object',
          fields: [{name: 'label', type: 'string'}],
        },
      ],
    }),
    defineField({
      name: 'new_visit_form',
      group: 'new_visit_form',
      type: 'object',
      description:
        'use to set the labels on the form used to upload client/dress info and client photos/videos',
      fields: [
        {name: 'form_title', type: 'string', description: 'Title of the page above the form'},
        defineField({
          name: 'client_toggle_button_labels',
          type: 'object',
          fields: [
            {
              name: 'new_client',
              type: 'string',
              description:
                'This text will be shown when the searchbar is present and clicking on this will render the fields to create a new user',
            },
            {
              name: 'existing_client',
              type: 'string',
              description:
                'This text will be shown when the new user fields are present and clicking on this will render the user searchbar',
            },
          ],
        }),
        {
          name: 'client_searchbar',
          type: 'object',
          description: 'This field is for the searchbar to find an existing customer',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'client_name',
          type: 'object',
          description: "This field is for a new client's name",
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'client_email',
          type: 'object',
          description: "This field is for a new client's email",
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'notes',
          description:
            'Notes to be injected into the automated email notification the client recieves when their watermarked content is ready to view',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'dress',
          type: 'object',
          description: 'Searchbar for dresses from shopify',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'dress_price_override',
          type: 'object',
          description: 'optional field used to override price data from shopify',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'extra_emails',
          description:
            'Optional field used to CC extra email accounts on automated email to client',
          type: 'object',
          fields: [
            {name: 'label', type: 'string'},
            {name: 'placeholder', type: 'string'},
          ],
        },
        {
          name: 'extra_emails_button',
          description: 'Button used to render additional extra email fields',
          type: 'object',
          fields: [{name: 'label', type: 'string'}],
        },
        {
          name: 'file_upload',
          type: 'object',
          fields: [{name: 'label', type: 'string'}],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
})
