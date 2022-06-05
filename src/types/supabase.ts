/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/retros": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.retros.id"];
          is_done?: parameters["rowFilter.retros.is_done"];
          title?: parameters["rowFilter.retros.title"];
          created_by?: parameters["rowFilter.retros.created_by"];
          created_at?: parameters["rowFilter.retros.created_at"];
          updated_at?: parameters["rowFilter.retros.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["retros"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** retros */
          retros?: definitions["retros"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.retros.id"];
          is_done?: parameters["rowFilter.retros.is_done"];
          title?: parameters["rowFilter.retros.title"];
          created_by?: parameters["rowFilter.retros.created_by"];
          created_at?: parameters["rowFilter.retros.created_at"];
          updated_at?: parameters["rowFilter.retros.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.retros.id"];
          is_done?: parameters["rowFilter.retros.is_done"];
          title?: parameters["rowFilter.retros.title"];
          created_by?: parameters["rowFilter.retros.created_by"];
          created_at?: parameters["rowFilter.retros.created_at"];
          updated_at?: parameters["rowFilter.retros.updated_at"];
        };
        body: {
          /** retros */
          retros?: definitions["retros"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/users": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          name?: parameters["rowFilter.users.name"];
          avatar_url?: parameters["rowFilter.users.avatar_url"];
          created_at?: parameters["rowFilter.users.created_at"];
          updated_at?: parameters["rowFilter.users.updated_at"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["users"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** users */
          users?: definitions["users"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          name?: parameters["rowFilter.users.name"];
          avatar_url?: parameters["rowFilter.users.avatar_url"];
          created_at?: parameters["rowFilter.users.created_at"];
          updated_at?: parameters["rowFilter.users.updated_at"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.users.id"];
          name?: parameters["rowFilter.users.name"];
          avatar_url?: parameters["rowFilter.users.avatar_url"];
          created_at?: parameters["rowFilter.users.created_at"];
          updated_at?: parameters["rowFilter.users.updated_at"];
        };
        body: {
          /** users */
          users?: definitions["users"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  retros: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: boolean
     * @default false
     */
    is_done: boolean;
    /** Format: text */
    title?: string;
    /** Format: uuid */
    created_by: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp without time zone
     * @default now()
     */
    updated_at: string;
  };
  users: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: text */
    name?: string;
    /** Format: text */
    avatar_url?: string;
    /**
     * Format: timestamp without time zone
     * @default now()
     */
    created_at: string;
    /**
     * Format: timestamp without time zone
     * @default now()
     */
    updated_at: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description retros */
  "body.retros": definitions["retros"];
  /** Format: bigint */
  "rowFilter.retros.id": string;
  /** Format: boolean */
  "rowFilter.retros.is_done": string;
  /** Format: text */
  "rowFilter.retros.title": string;
  /** Format: uuid */
  "rowFilter.retros.created_by": string;
  /** Format: timestamp with time zone */
  "rowFilter.retros.created_at": string;
  /** Format: timestamp without time zone */
  "rowFilter.retros.updated_at": string;
  /** @description users */
  "body.users": definitions["users"];
  /** Format: uuid */
  "rowFilter.users.id": string;
  /** Format: text */
  "rowFilter.users.name": string;
  /** Format: text */
  "rowFilter.users.avatar_url": string;
  /** Format: timestamp without time zone */
  "rowFilter.users.created_at": string;
  /** Format: timestamp without time zone */
  "rowFilter.users.updated_at": string;
}

export interface operations {}

export interface external {}