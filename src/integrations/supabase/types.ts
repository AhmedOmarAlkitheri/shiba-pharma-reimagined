export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      hospitals: {
        Row: {
          address_ar: string | null
          address_en: string | null
          created_at: string
          display_order: number
          email: string | null
          id: string
          is_published: boolean
          logo_url: string | null
          name_ar: string
          name_en: string
          phone: string | null
          services: string[] | null
          type_ar: string | null
          type_en: string | null
          updated_at: string
        }
        Insert: {
          address_ar?: string | null
          address_en?: string | null
          created_at?: string
          display_order?: number
          email?: string | null
          id?: string
          is_published?: boolean
          logo_url?: string | null
          name_ar: string
          name_en: string
          phone?: string | null
          services?: string[] | null
          type_ar?: string | null
          type_en?: string | null
          updated_at?: string
        }
        Update: {
          address_ar?: string | null
          address_en?: string | null
          created_at?: string
          display_order?: number
          email?: string | null
          id?: string
          is_published?: boolean
          logo_url?: string | null
          name_ar?: string
          name_en?: string
          phone?: string | null
          services?: string[] | null
          type_ar?: string | null
          type_en?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      media: {
        Row: {
          alt_text: string | null
          created_at: string
          file_name: string
          file_path: string
          id: string
          mime_type: string | null
          size_bytes: number | null
          uploaded_by: string | null
          url: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string
          file_name: string
          file_path: string
          id?: string
          mime_type?: string | null
          size_bytes?: number | null
          uploaded_by?: string | null
          url: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string
          file_name?: string
          file_path?: string
          id?: string
          mime_type?: string | null
          size_bytes?: number | null
          uploaded_by?: string | null
          url?: string
        }
        Relationships: []
      }
      news_articles: {
        Row: {
          content_ar: string | null
          content_en: string | null
          created_at: string
          display_order: number
          excerpt_ar: string | null
          excerpt_en: string | null
          id: string
          image_url: string | null
          is_published: boolean
          published_date: string
          slug: string
          title_ar: string
          title_en: string
          updated_at: string
        }
        Insert: {
          content_ar?: string | null
          content_en?: string | null
          created_at?: string
          display_order?: number
          excerpt_ar?: string | null
          excerpt_en?: string | null
          id?: string
          image_url?: string | null
          is_published?: boolean
          published_date?: string
          slug: string
          title_ar: string
          title_en: string
          updated_at?: string
        }
        Update: {
          content_ar?: string | null
          content_en?: string | null
          created_at?: string
          display_order?: number
          excerpt_ar?: string | null
          excerpt_en?: string | null
          id?: string
          image_url?: string | null
          is_published?: boolean
          published_date?: string
          slug?: string
          title_ar?: string
          title_en?: string
          updated_at?: string
        }
        Relationships: []
      }
      pages: {
        Row: {
          created_at: string
          display_order: number
          id: string
          is_published: boolean
          meta_description_ar: string | null
          meta_description_en: string | null
          slug: string
          title_ar: string
          title_en: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          id?: string
          is_published?: boolean
          meta_description_ar?: string | null
          meta_description_en?: string | null
          slug: string
          title_ar: string
          title_en: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          id?: string
          is_published?: boolean
          meta_description_ar?: string | null
          meta_description_en?: string | null
          slug?: string
          title_ar?: string
          title_en?: string
          updated_at?: string
        }
        Relationships: []
      }
      product_categories: {
        Row: {
          created_at: string
          display_order: number
          icon: string | null
          id: string
          name_ar: string
          name_en: string
          slug: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          display_order?: number
          icon?: string | null
          id?: string
          name_ar: string
          name_en: string
          slug: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          display_order?: number
          icon?: string | null
          id?: string
          name_ar?: string
          name_en?: string
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      products: {
        Row: {
          category_id: string | null
          composition_ar: string | null
          composition_en: string | null
          contraindications_ar: string | null
          contraindications_en: string | null
          created_at: string
          description_ar: string | null
          description_en: string | null
          display_order: number
          dosage_ar: string | null
          dosage_en: string | null
          id: string
          image_url: string | null
          indication_ar: string | null
          indication_en: string | null
          is_featured: boolean
          is_published: boolean
          name: string
          packaging_ar: string | null
          packaging_en: string | null
          side_effects_ar: string | null
          side_effects_en: string | null
          slug: string
          storage_ar: string | null
          storage_en: string | null
          updated_at: string
        }
        Insert: {
          category_id?: string | null
          composition_ar?: string | null
          composition_en?: string | null
          contraindications_ar?: string | null
          contraindications_en?: string | null
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          display_order?: number
          dosage_ar?: string | null
          dosage_en?: string | null
          id?: string
          image_url?: string | null
          indication_ar?: string | null
          indication_en?: string | null
          is_featured?: boolean
          is_published?: boolean
          name: string
          packaging_ar?: string | null
          packaging_en?: string | null
          side_effects_ar?: string | null
          side_effects_en?: string | null
          slug: string
          storage_ar?: string | null
          storage_en?: string | null
          updated_at?: string
        }
        Update: {
          category_id?: string | null
          composition_ar?: string | null
          composition_en?: string | null
          contraindications_ar?: string | null
          contraindications_en?: string | null
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          display_order?: number
          dosage_ar?: string | null
          dosage_en?: string | null
          id?: string
          image_url?: string | null
          indication_ar?: string | null
          indication_en?: string | null
          is_featured?: boolean
          is_published?: boolean
          name?: string
          packaging_ar?: string | null
          packaging_en?: string | null
          side_effects_ar?: string | null
          side_effects_en?: string | null
          slug?: string
          storage_ar?: string | null
          storage_en?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "products_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "product_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          email: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          email?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      sections: {
        Row: {
          background_url: string | null
          button_label_ar: string | null
          button_label_en: string | null
          button_url: string | null
          created_at: string
          description_ar: string | null
          description_en: string | null
          display_order: number
          extra: Json | null
          id: string
          image_url: string | null
          is_visible: boolean
          layout_variant: string
          page_id: string
          section_key: string
          subtitle_ar: string | null
          subtitle_en: string | null
          title_ar: string | null
          title_en: string | null
          updated_at: string
        }
        Insert: {
          background_url?: string | null
          button_label_ar?: string | null
          button_label_en?: string | null
          button_url?: string | null
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          display_order?: number
          extra?: Json | null
          id?: string
          image_url?: string | null
          is_visible?: boolean
          layout_variant?: string
          page_id: string
          section_key: string
          subtitle_ar?: string | null
          subtitle_en?: string | null
          title_ar?: string | null
          title_en?: string | null
          updated_at?: string
        }
        Update: {
          background_url?: string | null
          button_label_ar?: string | null
          button_label_en?: string | null
          button_url?: string | null
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          display_order?: number
          extra?: Json | null
          id?: string
          image_url?: string | null
          is_visible?: boolean
          layout_variant?: string
          page_id?: string
          section_key?: string
          subtitle_ar?: string | null
          subtitle_en?: string | null
          title_ar?: string | null
          title_en?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sections_page_id_fkey"
            columns: ["page_id"]
            isOneToOne: false
            referencedRelation: "pages"
            referencedColumns: ["id"]
          },
        ]
      }
      site_settings: {
        Row: {
          address_ar: string | null
          address_en: string | null
          created_at: string
          email: string | null
          facebook_url: string | null
          favicon_url: string | null
          id: string
          instagram_url: string | null
          linkedin_url: string | null
          logo_url: string | null
          phone: string | null
          site_name_ar: string | null
          site_name_en: string | null
          twitter_url: string | null
          updated_at: string
          whatsapp: string | null
          youtube_url: string | null
        }
        Insert: {
          address_ar?: string | null
          address_en?: string | null
          created_at?: string
          email?: string | null
          facebook_url?: string | null
          favicon_url?: string | null
          id?: string
          instagram_url?: string | null
          linkedin_url?: string | null
          logo_url?: string | null
          phone?: string | null
          site_name_ar?: string | null
          site_name_en?: string | null
          twitter_url?: string | null
          updated_at?: string
          whatsapp?: string | null
          youtube_url?: string | null
        }
        Update: {
          address_ar?: string | null
          address_en?: string | null
          created_at?: string
          email?: string | null
          facebook_url?: string | null
          favicon_url?: string | null
          id?: string
          instagram_url?: string | null
          linkedin_url?: string | null
          logo_url?: string | null
          phone?: string | null
          site_name_ar?: string | null
          site_name_en?: string | null
          twitter_url?: string | null
          updated_at?: string
          whatsapp?: string | null
          youtube_url?: string | null
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          created_at: string
          description_ar: string | null
          description_en: string | null
          display_order: number
          id: string
          is_published: boolean
          published_date: string
          thumbnail_url: string | null
          title_ar: string
          title_en: string
          updated_at: string
          video_url: string
        }
        Insert: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          display_order?: number
          id?: string
          is_published?: boolean
          published_date?: string
          thumbnail_url?: string | null
          title_ar: string
          title_en: string
          updated_at?: string
          video_url: string
        }
        Update: {
          created_at?: string
          description_ar?: string | null
          description_en?: string | null
          display_order?: number
          id?: string
          is_published?: boolean
          published_date?: string
          thumbnail_url?: string | null
          title_ar?: string
          title_en?: string
          updated_at?: string
          video_url?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "editor" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor", "user"],
    },
  },
} as const
